import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ContactRecord, PartnershipRecord, CheckboxLead } from "@shared/schema";
import { Download, Users, MessageSquare, LogOut, Eye, EyeOff, ChevronUp, ChevronDown, Calendar, Filter, Clipboard } from "lucide-react";
import { format, isWithinInterval, parseISO } from "date-fns";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginMutation } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forillon Tech Admin
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access the admin dashboard
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter admin username"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const { toast } = useToast();

  // State for filtering, sorting, and pagination
  const [dateFilter, setDateFilter] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [contactSort, setContactSort] = useState({ field: 'createdAt', direction: 'desc' as 'asc' | 'desc' });
  const [partnershipSort, setPartnershipSort] = useState({ field: 'createdAt', direction: 'desc' as 'asc' | 'desc' });
  const [checkboxLeadSort, setCheckboxLeadSort] = useState({ field: 'createdAt', direction: 'desc' as 'asc' | 'desc' });
  const [contactPage, setContactPage] = useState(1);
  const [partnershipPage, setPartnershipPage] = useState(1);
  const [checkboxLeadPage, setCheckboxLeadPage] = useState(1);
  const recordsPerPage = 10;

  const { data: contacts = [], isLoading: contactsLoading } = useQuery<ContactRecord[]>({
    queryKey: ["/api/admin/contacts"],
  });

  const { data: partnerships = [], isLoading: partnershipsLoading } = useQuery<PartnershipRecord[]>({
    queryKey: ["/api/admin/partnerships"],
  });

  const { data: checkboxLeads = [], isLoading: checkboxLeadsLoading } = useQuery<CheckboxLead[]>({
    queryKey: ["/api/admin/checkbox-leads"],
  });

  // Filter and sort functions
  const filterByDate = (items: any[]) => {
    if (dateFilter === 'all') return items;
    
    if (dateFilter === 'custom' && startDate && endDate) {
      const start = parseISO(startDate);
      const end = parseISO(endDate);
      return items.filter(item => {
        if (!item.createdAt) return false;
        const itemDate = parseISO(item.createdAt);
        return isWithinInterval(itemDate, { start, end });
      });
    }
    
    const now = new Date();
    const filterDate = new Date();
    
    switch (dateFilter) {
      case 'today':
        filterDate.setHours(0, 0, 0, 0);
        break;
      case 'week':
        filterDate.setDate(now.getDate() - 7);
        break;
      case 'month':
        filterDate.setMonth(now.getMonth() - 1);
        break;
      default:
        return items;
    }
    
    return items.filter(item => {
      if (!item.createdAt) return false;
      const itemDate = parseISO(item.createdAt);
      return itemDate >= filterDate;
    });
  };

  const sortData = (items: any[], sortConfig: { field: string; direction: 'asc' | 'desc' }) => {
    return [...items].sort((a, b) => {
      const aValue = a[sortConfig.field];
      const bValue = b[sortConfig.field];
      
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const paginateData = (items: any[], page: number) => {
    const startIndex = (page - 1) * recordsPerPage;
    return items.slice(startIndex, startIndex + recordsPerPage);
  };

  // Process data
  const filteredContacts = filterByDate(contacts);
  const sortedContacts = sortData(filteredContacts, contactSort);
  const paginatedContacts = paginateData(sortedContacts, contactPage);
  const totalContactPages = Math.ceil(sortedContacts.length / recordsPerPage);

  const filteredPartnerships = filterByDate(partnerships);
  const sortedPartnerships = sortData(filteredPartnerships, partnershipSort);
  const paginatedPartnerships = paginateData(sortedPartnerships, partnershipPage);
  const totalPartnershipPages = Math.ceil(sortedPartnerships.length / recordsPerPage);

  const filteredCheckboxLeads = filterByDate(checkboxLeads);
  const sortedCheckboxLeads = sortData(filteredCheckboxLeads, checkboxLeadSort);
  const paginatedCheckboxLeads = paginateData(sortedCheckboxLeads, checkboxLeadPage);
  const totalCheckboxLeadPages = Math.ceil(sortedCheckboxLeads.length / recordsPerPage);

  const handleSort = (field: string, type: 'contacts' | 'partnerships' | 'checkbox-leads') => {
    if (type === 'contacts') {
      setContactSort(prev => ({
        field,
        direction: prev.field === field && prev.direction === 'desc' ? 'asc' : 'desc'
      }));
      setContactPage(1);
    } else if (type === 'partnerships') {
      setPartnershipSort(prev => ({
        field,
        direction: prev.field === field && prev.direction === 'desc' ? 'asc' : 'desc'
      }));
      setPartnershipPage(1);
    } else {
      setCheckboxLeadSort(prev => ({
        field,
        direction: prev.field === field && prev.direction === 'desc' ? 'asc' : 'desc'
      }));
      setCheckboxLeadPage(1);
    }
  };

  const downloadCSV = async (type: 'contacts' | 'partnerships' | 'checkbox-leads') => {
    try {
      const response = await fetch(`/api/admin/export/${type}`, {
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error(`Failed to export ${type}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${type}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Export successful",
        description: `${type.charAt(0).toUpperCase() + type.slice(1)} exported to CSV file`,
      });
    } catch (error) {
      toast({
        title: "Export failed",
        description: `Failed to export ${type}`,
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Forillon Tech Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.username}</p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contacts.length}</div>
              <p className="text-xs text-muted-foreground">Contact form submissions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Partnerships</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{partnerships.length}</div>
              <p className="text-xs text-muted-foreground">Partnership inquiries</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demo Requests</CardTitle>
              <Clipboard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{checkboxLeads.length}</div>
              <p className="text-xs text-muted-foreground">Checkbox platform leads</p>
            </CardContent>
          </Card>
        </div>

        {/* Date Filter Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filter Records
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <Label htmlFor="date-filter">Date Range</Label>
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">Last 7 Days</SelectItem>
                    <SelectItem value="month">Last 30 Days</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {dateFilter === 'custom' && (
                <>
                  <div>
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-40"
                    />
                  </div>
                  <div>
                    <Label htmlFor="end-date">End Date</Label>
                    <Input
                      id="end-date"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-40"
                    />
                  </div>
                </>
              )}
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Contacts: {sortedContacts.length} records</span>
                <span>Partnerships: {sortedPartnerships.length} records</span>
                <span>Demo Requests: {sortedCheckboxLeads.length} records</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Tables */}
        <Tabs defaultValue="contacts" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contacts">
              Contact Records ({sortedContacts.length})
            </TabsTrigger>
            <TabsTrigger value="partnerships">
              Partnership Records ({sortedPartnerships.length})
            </TabsTrigger>
            <TabsTrigger value="demo-requests">
              Demo Requests ({sortedCheckboxLeads.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Contact Form Submissions</CardTitle>
                  <Button onClick={() => downloadCSV('contacts')}>
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {contactsLoading ? (
                  <div className="text-center py-4">Loading contacts...</div>
                ) : sortedContacts.length === 0 ? (
                  <div className="text-center py-4 text-gray-500">No contact records found</div>
                ) : (
                  <div>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('id', 'contacts')}
                                className="h-auto p-0 font-semibold"
                              >
                                ID
                                {contactSort.field === 'id' && (
                                  contactSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('name', 'contacts')}
                                className="h-auto p-0 font-semibold"
                              >
                                Name
                                {contactSort.field === 'name' && (
                                  contactSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('email', 'contacts')}
                                className="h-auto p-0 font-semibold"
                              >
                                Email
                                {contactSort.field === 'email' && (
                                  contactSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('createdAt', 'contacts')}
                                className="h-auto p-0 font-semibold"
                              >
                                Date
                                {contactSort.field === 'createdAt' && (
                                  contactSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                      <TableBody>
                        {paginatedContacts.map((contact) => (
                          <TableRow key={contact.id}>
                            <TableCell>{contact.id}</TableCell>
                            <TableCell className="font-medium">{contact.name}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.subject}</TableCell>
                            <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                            <TableCell>
                              {contact.createdAt ? format(new Date(contact.createdAt), 'MMM d, yyyy') : 'N/A'}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    </div>
                    
                    {/* Pagination for Contacts */}
                    {totalContactPages > 1 && (
                      <div className="flex items-center justify-between px-2 py-4">
                        <div className="text-sm text-gray-500">
                          Showing {((contactPage - 1) * recordsPerPage) + 1} to{' '}
                          {Math.min(contactPage * recordsPerPage, sortedContacts.length)} of{' '}
                          {sortedContacts.length} records
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setContactPage(prev => Math.max(prev - 1, 1))}
                            disabled={contactPage === 1}
                          >
                            Previous
                          </Button>
                          <span className="text-sm">
                            Page {contactPage} of {totalContactPages}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setContactPage(prev => Math.min(prev + 1, totalContactPages))}
                            disabled={contactPage === totalContactPages}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="partnerships">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Partnership Inquiries</CardTitle>
                  <Button onClick={() => downloadCSV('partnerships')}>
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {partnershipsLoading ? (
                  <div className="text-center py-4">Loading partnerships...</div>
                ) : sortedPartnerships.length === 0 ? (
                  <div className="text-center py-4 text-gray-500">No partnership records found</div>
                ) : (
                  <div>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('id', 'partnerships')}
                                className="h-auto p-0 font-semibold"
                              >
                                ID
                                {partnershipSort.field === 'id' && (
                                  partnershipSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('firstName', 'partnerships')}
                                className="h-auto p-0 font-semibold"
                              >
                                Name
                                {partnershipSort.field === 'firstName' && (
                                  partnershipSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('email', 'partnerships')}
                                className="h-auto p-0 font-semibold"
                              >
                                Email
                                {partnershipSort.field === 'email' && (
                                  partnershipSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('companyName', 'partnerships')}
                                className="h-auto p-0 font-semibold"
                              >
                                Company
                                {partnershipSort.field === 'companyName' && (
                                  partnershipSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>Industry</TableHead>
                            <TableHead>Partnership Types</TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('createdAt', 'partnerships')}
                                className="h-auto p-0 font-semibold"
                              >
                                Date
                                {partnershipSort.field === 'createdAt' && (
                                  partnershipSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {paginatedPartnerships.map((partnership) => (
                            <TableRow key={partnership.id}>
                              <TableCell>{partnership.id}</TableCell>
                              <TableCell className="font-medium">
                                {partnership.firstName} {partnership.lastName}
                              </TableCell>
                              <TableCell>{partnership.email}</TableCell>
                              <TableCell>{partnership.companyName}</TableCell>
                              <TableCell>{partnership.industry}</TableCell>
                              <TableCell>
                                <div className="flex flex-wrap gap-1">
                                  {Array.isArray(partnership.partnershipType) 
                                    ? partnership.partnershipType.map((type: string, index: number) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                          {String(type)}
                                        </Badge>
                                      ))
                                    : <Badge variant="secondary" className="text-xs">
                                        {String(partnership.partnershipType)}
                                      </Badge>
                                  }
                                </div>
                              </TableCell>
                              <TableCell>
                                {partnership.createdAt ? format(new Date(partnership.createdAt), 'MMM d, yyyy') : 'N/A'}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    
                    {/* Pagination for Partnerships */}
                    {totalPartnershipPages > 1 && (
                      <div className="flex items-center justify-between px-2 py-4">
                        <div className="text-sm text-gray-500">
                          Showing {((partnershipPage - 1) * recordsPerPage) + 1} to{' '}
                          {Math.min(partnershipPage * recordsPerPage, sortedPartnerships.length)} of{' '}
                          {sortedPartnerships.length} records
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPartnershipPage(prev => Math.max(prev - 1, 1))}
                            disabled={partnershipPage === 1}
                          >
                            Previous
                          </Button>
                          <span className="text-sm">
                            Page {partnershipPage} of {totalPartnershipPages}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setPartnershipPage(prev => Math.min(prev + 1, totalPartnershipPages))}
                            disabled={partnershipPage === totalPartnershipPages}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demo-requests">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Checkbox Platform Demo Requests</CardTitle>
                  <Button onClick={() => downloadCSV('checkbox-leads')}>
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {checkboxLeadsLoading ? (
                  <div className="text-center py-4">Loading demo requests...</div>
                ) : sortedCheckboxLeads.length === 0 ? (
                  <div className="text-center py-4 text-gray-500">No demo requests found</div>
                ) : (
                  <div>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('id', 'checkbox-leads')}
                                className="h-auto p-0 font-semibold"
                              >
                                ID
                                {checkboxLeadSort.field === 'id' && (
                                  checkboxLeadSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('name', 'checkbox-leads')}
                                className="h-auto p-0 font-semibold"
                              >
                                Name
                                {checkboxLeadSort.field === 'name' && (
                                  checkboxLeadSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('company', 'checkbox-leads')}
                                className="h-auto p-0 font-semibold"
                              >
                                Company
                                {checkboxLeadSort.field === 'company' && (
                                  checkboxLeadSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('email', 'checkbox-leads')}
                                className="h-auto p-0 font-semibold"
                              >
                                Email
                                {checkboxLeadSort.field === 'email' && (
                                  checkboxLeadSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Product Type</TableHead>
                            <TableHead>Features</TableHead>
                            <TableHead>
                              <Button 
                                variant="ghost" 
                                onClick={() => handleSort('createdAt', 'checkbox-leads')}
                                className="h-auto p-0 font-semibold"
                              >
                                Date
                                {checkboxLeadSort.field === 'createdAt' && (
                                  checkboxLeadSort.direction === 'desc' ? 
                                    <ChevronDown className="ml-1 h-4 w-4" /> : 
                                    <ChevronUp className="ml-1 h-4 w-4" />
                                )}
                              </Button>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {paginatedCheckboxLeads.map((lead) => (
                            <TableRow key={lead.id}>
                              <TableCell>{lead.id}</TableCell>
                              <TableCell className="font-medium">{lead.name}</TableCell>
                              <TableCell>{lead.company}</TableCell>
                              <TableCell>{lead.email}</TableCell>
                              <TableCell>{lead.phone}</TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {lead.productType || 'Not specified'}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex flex-wrap gap-1 max-w-xs">
                                  {Array.isArray(lead.features) && lead.features.length > 0 ? (
                                    lead.features.slice(0, 3).map((feature: any, index: number) => (
                                      <Badge key={index} variant="secondary" className="text-xs">
                                        {String(feature)}
                                      </Badge>
                                    ))
                                  ) : (
                                    <span className="text-sm text-gray-500">None</span>
                                  )}
                                  {Array.isArray(lead.features) && lead.features.length > 3 && (
                                    <Badge variant="secondary" className="text-xs">
                                      +{lead.features.length - 3} more
                                    </Badge>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell>
                                {lead.createdAt ? format(new Date(lead.createdAt), 'MMM d, yyyy') : 'N/A'}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    
                    {/* Pagination for Demo Requests */}
                    {totalCheckboxLeadPages > 1 && (
                      <div className="flex items-center justify-between px-2 py-4">
                        <div className="text-sm text-gray-500">
                          Showing {((checkboxLeadPage - 1) * recordsPerPage) + 1} to{' '}
                          {Math.min(checkboxLeadPage * recordsPerPage, sortedCheckboxLeads.length)} of{' '}
                          {sortedCheckboxLeads.length} records
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCheckboxLeadPage(prev => Math.max(prev - 1, 1))}
                            disabled={checkboxLeadPage === 1}
                          >
                            Previous
                          </Button>
                          <span className="text-sm">
                            Page {checkboxLeadPage} of {totalCheckboxLeadPages}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCheckboxLeadPage(prev => Math.min(prev + 1, totalCheckboxLeadPages))}
                            disabled={checkboxLeadPage === totalCheckboxLeadPages}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return user ? <AdminDashboard /> : <LoginForm />;
}