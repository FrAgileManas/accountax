"use client";
import React, { useState } from 'react';
import { X, Eye, Download, Star } from 'lucide-react';
import { InvoicingTemplate } from '@/types/invoicing';

// Enhanced template configuration that extends the base template data
interface TemplateConfig extends InvoicingTemplate {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    headerBg: string;
    tableBg: string;
    textColor: string;
    borderColor: string;
  };
}

// Template configurations - these extend the base templates from data file
const templateConfigs: Record<string, TemplateConfig['theme']> = {
  "1": { // Professional Services
    primary: "text-blue-600",
    secondary: "bg-blue-50",
    accent: "border-blue-200",
    headerBg: "border-blue-600",
    tableBg: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-600"
  },
  "2": { // Product Sales
    primary: "text-green-600",
    secondary: "bg-green-50",
    accent: "border-green-200",
    headerBg: "bg-green-600",
    tableBg: "bg-green-50",
    textColor: "text-white",
    borderColor: "border-green-600"
  },
  "3": { // Freelancer
    primary: "text-purple-600",
    secondary: "bg-purple-50",
    accent: "border-purple-200",
    headerBg: "border-purple-600",
    tableBg: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-600"
  },
  "4": { // Modern Corporate
    primary: "text-slate-600",
    secondary: "bg-slate-50",
    accent: "border-slate-200",
    headerBg: "bg-slate-600",
    tableBg: "bg-slate-100",
    textColor: "text-white",
    borderColor: "border-slate-600"
  },
  "5": { // Creative Agency
    primary: "text-orange-600",
    secondary: "bg-orange-50",
    accent: "border-orange-200",
    headerBg: "bg-gradient-to-r from-orange-500 to-red-500",
    tableBg: "bg-orange-50",
    textColor: "text-white",
    borderColor: "border-orange-600"
  },
  "6": { // Minimal Clean
    primary: "text-gray-600",
    secondary: "bg-gray-50",
    accent: "border-gray-200",
    headerBg: "border-gray-300",
    tableBg: "bg-gray-50",
    textColor: "text-gray-600",
    borderColor: "border-gray-300"
  }
};

// Generic data for templates
const genericData = {
  company: {
    name: "Your Company Name",
    address: "123 Business Street",
    city: "City, State 12345",
    email: "contact@company.com",
    phone: "+1 (555) 123-4567"
  },
  client: {
    name: "Client Company",
    contact: "John Doe",
    address: "456 Client Avenue",
    city: "Client City, State 67890",
    email: "client@company.com"
  },
  invoice: {
    number: "INV-2024-001",
    date: "March 15, 2024",
    dueDate: "April 15, 2024",
    project: "Project Name"
  },
  items: [
    {
      description: "Service/Product 1",
      quantity: 40,
      rate: 150,
      amount: 6000
    },
    {
      description: "Service/Product 2",
      quantity: 20,
      rate: 100,
      amount: 2000
    }
  ],
  totals: {
    subtotal: 8000,
    tax: 800,
    taxRate: 10,
    total: 8800
  }
};

// Generic Template Component
interface GenericTemplateProps {
  template: InvoicingTemplate;
  layout?: "standard" | "header" | "minimal";
}

const GenericTemplate: React.FC<GenericTemplateProps> = ({ template, layout = "standard" }) => {
  const theme = templateConfigs[template.id];
  
  if (!theme) {
    return <div className="p-4 text-center text-gray-500">Template not found</div>;
  }

  const renderStandardLayout = () => (
    <div className="w-full h-full bg-white p-6 text-xs">
      <div className={`border-b-2 ${theme.borderColor} pb-4 mb-6`}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className={`text-2xl font-bold ${theme.primary}`}>INVOICE</h1>
            <p className="text-gray-600">{genericData.invoice.number}</p>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-semibold">{genericData.company.name}</h2>
            <p className="text-gray-600">{genericData.company.address}</p>
            <p className="text-gray-600">{genericData.company.city}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Bill To:</h3>
          <p className="text-gray-700">{genericData.client.name}</p>
          <p className="text-gray-600">{genericData.client.address}</p>
          <p className="text-gray-600">{genericData.client.city}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Invoice Date: {genericData.invoice.date}</p>
          <p className="text-gray-600">Due Date: {genericData.invoice.dueDate}</p>
        </div>
      </div>

      <table className="w-full mb-6">
        <thead>
          <tr className={`${theme.tableBg} ${theme.accent} border-b`}>
            <th className="text-left p-2 text-gray-700">Description</th>
            <th className="text-right p-2 text-gray-700">Qty/Hours</th>
            <th className="text-right p-2 text-gray-700">Rate</th>
            <th className="text-right p-2 text-gray-700">Amount</th>
          </tr>
        </thead>
        <tbody>
          {genericData.items.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-2">{item.description}</td>
              <td className="text-right p-2">{item.quantity}</td>
              <td className="text-right p-2">${item.rate}</td>
              <td className="text-right p-2">${item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <div className="w-64">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span>Subtotal:</span>
            <span>${genericData.totals.subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span>Tax ({genericData.totals.taxRate}%):</span>
            <span>${genericData.totals.tax.toLocaleString()}</span>
          </div>
          <div className={`flex justify-between py-3 font-bold text-lg ${theme.tableBg} px-2 rounded`}>
            <span>Total:</span>
            <span>${genericData.totals.total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHeaderLayout = () => (
    <div className="w-full h-full bg-white p-6 text-xs">
      <div className={`${theme.headerBg} ${theme.textColor} p-4 rounded-t-lg mb-6`}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">INVOICE</h1>
            <p className="opacity-90">{genericData.invoice.number}</p>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-semibold">{genericData.company.name}</h2>
            <p className="opacity-90">{genericData.company.email}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Bill To:</h3>
          <p className="text-gray-700">{genericData.client.contact}</p>
          <p className="text-gray-600">{genericData.client.address}</p>
          <p className="text-gray-600">{genericData.client.city}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Invoice Date: {genericData.invoice.date}</p>
          <p className="text-gray-600">Due Date: {genericData.invoice.dueDate}</p>
        </div>
      </div>

      <table className="w-full mb-6">
        <thead>
          <tr className={`${theme.tableBg} ${theme.accent} border-b`}>
            <th className="text-left p-2 text-gray-700">Description</th>
            <th className="text-center p-2 text-gray-700">Qty</th>
            <th className="text-right p-2 text-gray-700">Rate</th>
            <th className="text-right p-2 text-gray-700">Total</th>
          </tr>
        </thead>
        <tbody>
          {genericData.items.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-2">{item.description}</td>
              <td className="text-center p-2">{item.quantity}</td>
              <td className="text-right p-2">${item.rate}</td>
              <td className="text-right p-2">${item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end">
        <div className="w-64">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span>Subtotal:</span>
            <span>${genericData.totals.subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span>Tax ({genericData.totals.taxRate}%):</span>
            <span>${genericData.totals.tax.toLocaleString()}</span>
          </div>
          <div className={`flex justify-between py-3 font-bold text-lg ${theme.headerBg} ${theme.textColor} px-2 rounded`}>
            <span>Total:</span>
            <span>${genericData.totals.total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMinimalLayout = () => (
    <div className="w-full h-full bg-white p-6 text-xs">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-gray-800 mb-2">Invoice</h1>
          <p className="text-gray-500">{genericData.invoice.number}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-sm font-medium text-gray-800 mb-3">From</h3>
            <p className="text-gray-700">{genericData.company.name}</p>
            <p className="text-gray-600">{genericData.company.email}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800 mb-3">To</h3>
            <p className="text-gray-700">{genericData.client.name}</p>
            <p className="text-gray-600">{genericData.client.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-sm font-medium text-gray-800 mb-1">Date</h3>
            <p className="text-gray-600">{genericData.invoice.date}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800 mb-1">Due</h3>
            <p className="text-gray-600">{genericData.invoice.dueDate}</p>
          </div>
        </div>

        <div className="mb-12">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-gray-700 font-medium">Description</th>
                <th className="text-right py-3 text-gray-700 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {genericData.items.map((item, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 text-gray-700">{item.description}</td>
                  <td className="text-right py-4 text-gray-700">${item.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <div className="w-64">
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800">Total</span>
                <span className="text-2xl font-light text-gray-800">${genericData.totals.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  switch (layout) {
    case "header":
      return renderHeaderLayout();
    case "minimal":
      return renderMinimalLayout();
    default:
      return renderStandardLayout();
  }
};

// Template Modal Component
interface TemplateModalProps {
  template: InvoicingTemplate | null;
  isOpen: boolean;
  onClose: () => void;
}

const TemplateModal: React.FC<TemplateModalProps> = ({ template, isOpen, onClose }) => {
  if (!isOpen || !template) return null;

  const getLayout = (templateId: string): "standard" | "header" | "minimal" => {
    switch (templateId) {
      case "2":
      case "5":
        return "header";
      case "6":
        return "minimal";
      default:
        return "standard";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
            <p className="text-sm text-gray-600">{template.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 overflow-auto max-h-[calc(90vh-120px)]">
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="bg-white rounded shadow-lg" style={{ aspectRatio: '8.5/11' }}>
              <GenericTemplate template={template} layout={getLayout(template.id)} />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-4 border-t bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star size={16} className="text-yellow-500 fill-current" />
              <span>{template.rating || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Download size={16} />
              <span>{template.downloads || 'N/A'} downloads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component Props
interface InvoicingTemplatesProps {
  templates: InvoicingTemplate[];
}

const InvoicingTemplates: React.FC<InvoicingTemplatesProps> = ({ templates }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<InvoicingTemplate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTemplate = (template: InvoicingTemplate) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  const getColorClasses = (color: string = 'blue') => {
    const colorMap: Record<string, { bg: string; border: string; hover: string }> = {
      blue: { bg: 'bg-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-300' },
      green: { bg: 'bg-green-600', border: 'border-green-200', hover: 'hover:border-green-300' },
      purple: { bg: 'bg-purple-600', border: 'border-purple-200', hover: 'hover:border-purple-300' },
      slate: { bg: 'bg-slate-600', border: 'border-slate-200', hover: 'hover:border-slate-300' },
      orange: { bg: 'bg-gradient-to-r from-orange-500 to-red-500', border: 'border-orange-200', hover: 'hover:border-orange-300' },
      gray: { bg: 'bg-gray-600', border: 'border-gray-200', hover: 'hover:border-gray-300' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Professional Invoice Templates
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our collection of beautifully designed, professional templates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => {
            const colorClasses = getColorClasses(template.color);
            return (
              <div key={template.id} className="group cursor-pointer">
                <div className={`bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-all ${colorClasses.border} ${colorClasses.hover}`}>
                  {/* Template Preview */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-4 bg-white rounded shadow-sm p-3">
                      <div className={`h-2 rounded mb-2 ${colorClasses.bg}`}></div>
                      <div className="h-1 bg-gray-200 rounded mb-1"></div>
                      <div className="h-1 bg-gray-200 rounded w-3/4 mb-3"></div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-100 rounded"></div>
                        <div className="h-1 bg-gray-100 rounded w-5/6"></div>
                        <div className="h-1 bg-gray-100 rounded w-4/6"></div>
                        <div className="h-1 bg-gray-100 rounded w-3/6"></div>
                      </div>
                      <div className="absolute bottom-3 right-3 w-8 h-1 bg-gray-300 rounded"></div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded ${colorClasses.bg}`}>
                      {template.category}
                    </div>
                    
                    {/* Preview Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => openTemplate(template)}
                          className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                        >
                          <Eye size={16} />
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {template.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <span>{template.rating || 'N/A'}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Download size={12} />
                      <span>{template.downloads || 'N/A'}</span>
                    </div>
                    <button 
                      onClick={() => openTemplate(template)}
                      className="bg-gray-50 text-gray-700 py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-medium group-hover:bg-blue-50 group-hover:text-blue-600 flex items-center gap-2"
                    >
                      <Eye size={14} />
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom template design for your business?
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Request Custom Template
          </button>
        </div>
      </div>

      {/* Template Preview Modal */}
      <TemplateModal 
        template={selectedTemplate} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default InvoicingTemplates;