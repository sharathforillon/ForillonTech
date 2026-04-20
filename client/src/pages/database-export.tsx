import { Download, Database, FileText, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DatabaseExport() {
  const downloadFile = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/database-exports/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportFiles = [
    {
      name: "forillon-schema-2025-07-22T07-20-25-088Z.sql",
      type: "Schema Only",
      description: "Database structure and table definitions only",
      icon: Database,
      size: "~2KB"
    },
    {
      name: "forillon-data-2025-07-22T07-20-25-088Z.sql", 
      type: "Data Only",
      description: "All data without schema structure",
      icon: Package,
      size: "~1KB"
    },
    {
      name: "forillon-full-2025-07-22T07-20-25-088Z.sql",
      type: "Complete Database",
      description: "Full database backup with schema and data",
      icon: FileText,
      size: "~3KB"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-ice-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-electric-teal/10 rounded-full mb-6">
            <Database className="w-4 h-4 text-electric-teal mr-2" />
            <span className="text-electric-teal font-semibold text-sm">DATABASE EXPORT</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-forillon-navy mb-6">
            Forillon Technologies
            <span className="block text-electric-teal">Database Export</span>
          </h1>
          <p className="text-xl text-slate-gray max-w-2xl mx-auto">
            Download your complete database backup files including schema, data, and restoration instructions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {exportFiles.map((file, index) => {
            const IconComponent = file.icon;
            return (
              <Card key={index} className="border-electric-teal/20 hover:border-electric-teal/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-electric-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-electric-teal" />
                  </div>
                  <CardTitle className="text-forillon-navy">{file.type}</CardTitle>
                  <CardDescription>{file.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-slate-gray mb-4">Size: {file.size}</p>
                  <Button 
                    onClick={() => downloadFile(file.name)}
                    className="bg-electric-teal hover:bg-electric-teal/90 text-white w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-electric-teal/20">
          <CardHeader>
            <CardTitle className="text-forillon-navy flex items-center">
              <FileText className="w-5 h-5 mr-2 text-electric-teal" />
              README & Instructions
            </CardTitle>
            <CardDescription>
              Detailed restoration instructions and export information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => downloadFile('README.md')}
              variant="outline"
              className="border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download README.md
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-electric-teal/5 rounded-lg border border-electric-teal/20">
          <h3 className="text-lg font-semibold text-forillon-navy mb-2">Export Information</h3>
          <ul className="text-slate-gray space-y-1 text-sm">
            <li>• Generated on: July 22, 2025 at 7:20 AM</li>
            <li>• Environment: Development</li>
            <li>• Project: Forillon Technologies Website</li>
            <li>• Database: PostgreSQL with Drizzle ORM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}