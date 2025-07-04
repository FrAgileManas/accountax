"use client";
import React, { useState } from 'react';
import { X, Eye, Download, Star } from 'lucide-react';

// Generic template configuration
const templateConfigs = {
  professional: {
    id: "1",
    name: "Professional Services",
    description: "Perfect for consultants, agencies, and service providers",
    category: "Services",
    color: "blue",
    rating: 4.8,
    downloads: "2.1k",
    theme: {
      primary: "blue-600",
      secondary: "blue-50",
      accent: "blue-200",
      headerBg: "border-blue-600",
      tableBg: "bg-blue-50"
    }
  },
  product: {
    id: "2",
    name: "Product Sales",
    description: "Ideal for product-based businesses and e-commerce",
    category: "Products",
    color: "green",
    rating: 4.9,
    downloads: "1.8k",
    theme: {
      primary: "green-600",
      secondary: "green-50",
      accent: "green-200",
      headerBg: "bg-green-600",
      tableBg: "bg-green-50"
    }
  },
  freelancer: {
    id: "3",
    name: "Freelancer",
    description: "Simple, clean design for freelancers and contractors",
    category: "Freelance",
    color: "purple",
    rating: 4.7,
    downloads: "3.2k",
    theme: {
      primary: "purple-600",
      secondary: "purple-50",
      accent: "purple-200",
      headerBg: "border-purple-600",
      tableBg: "bg-purple-50"
    }
  },
  corporate: {
    id: "4",
    name: "Modern Corporate",
    description: "Contemporary design for modern businesses",
    category: "Corporate",
    color: "slate",
    rating: 4.6,
    downloads: "1.5k",
    theme: {
      primary: "slate-600",
      secondary: "slate-50",
      accent: "slate-200",
      headerBg: "bg-slate-600",
      tableBg: "bg-slate-100"
    }
  },
  creative: {
    id: "5",
    name: "Creative Agency",
    description: "Stylish template for creative professionals",
    category: "Creative",
    color: "orange",
    rating: 4.8,
    downloads: "2.3k",
    theme: {
      primary: "orange-600",
      secondary: "orange-50",
      accent: "orange-200",
      headerBg: "bg-gradient-to-r from-orange-500 to-red-500",
      tableBg: "bg-orange-50"
    }
  },
  minimal: {
    id: "6",
    name: "Minimal Clean",
    description: "Clean, minimalist design for any business",
    category: "Minimal",
    color: "gray",
    rating: 4.5,
    downloads: "1.9k",
    theme: {
      primary: "gray-600",
      secondary: "gray-50",
      accent: "gray-200",
      headerBg: "border-gray-300",
      tableBg: "bg-gray-50"
    }
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
const GenericTemplate = ({ config , layout = "standard" }) => {
  const { theme } = config;
  
  const renderStandardLayout = () => (
    <div className="w-full h-full bg-white p-6 text-xs">
      <div className={`border-b-2 ${theme.headerBg} pb-4 mb-6`}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className={`text-2xl font-bold text-${theme.primary}`}>INVOICE</h1>
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
          <tr className={`${theme.tableBg} border-b border-${theme.accent}`}>
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
      <div className={`${theme.headerBg} text-white p-4 rounded-t-lg mb-6`}>
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
          <tr className={`${theme.tableBg} border-b border-${theme.accent}`}>
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
          <div className={`flex justify-between py-3 font-bold text-lg ${theme.headerBg} text-white px-2 rounded`}>
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

// Type definitions for better type safety
interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  rating: number;
  downloads: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    headerBg: string;
    tableBg: string;
  };
}

interface TemplateModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

const TemplateModal: React.FC<TemplateModalProps> = ({ template, isOpen, onClose }) => {
  if (!isOpen || !template) return null;

  const getLayout = (templateId: string) => {
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
              <GenericTemplate config={template} layout={getLayout(template.id)} />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-4 border-t bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star size={16} className="text-yellow-500 fill-current" />
              <span>{template.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Download size={16} />
              <span>{template.downloads} downloads</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default function InvoicingTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const templates = Object.values(templateConfigs);

  const openTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-600 border-blue-200 hover:border-blue-300',
      green: 'bg-green-600 border-green-200 hover:border-green-300',
      purple: 'bg-purple-600 border-purple-200 hover:border-purple-300',
      slate: 'bg-slate-600 border-slate-200 hover:border-slate-300',
      orange: 'bg-gradient-to-r from-orange-500 to-red-500 border-orange-200 hover:border-orange-300',
      gray: 'bg-gray-600 border-gray-200 hover:border-gray-300'
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
          {templates.map((template) => (
            <div key={template.id} className="group cursor-pointer">
              <div className={`bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-all ${getColorClasses(template.color).split(' ')[1]} ${getColorClasses(template.color).split(' ')[2]}`}>
                {/* Template Preview */}
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-4 bg-white rounded shadow-sm p-3">
                    <div className={`h-2 rounded mb-2 ${getColorClasses(template.color).split(' ')[0]}`}></div>
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
                  <div className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded ${getColorClasses(template.color).split(' ')[0]}`}>
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
                    <span>{template.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">
                  {template.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Download size={12} />
                    <span>{template.downloads}</span>
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
          ))}
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
}