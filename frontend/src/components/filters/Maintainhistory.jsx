import React from "react";
import { CheckCircle, Clock, Calendar } from "lucide-react";

export default function MaintenanceHistoryItem({ record }) {
  const filterNames = {
    sediment: "Sediment Filter",
    eco_carbon: "Eco-Carbon Filter",
    hybrid_ro: "Hybrid RO Membrane"
  };

  const statusIcons = {
    completed: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
    scheduled: { icon: Clock, color: "text-blue-600", bg: "bg-blue-100" },
    pending: { icon: Clock, color: "text-orange-600", bg: "bg-orange-100" },
  };

  const status = statusIcons[record.status] || statusIcons.completed;
  const Icon = status.icon;

  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className={`p-2 rounded-lg ${status.bg}`}>
        <Icon className={`w-5 h-5 ${status.color}`} />
      </div>
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-semibold text-gray-900">{filterNames[record.filter_type]}</h4>
          <span className="text-sm font-bold text-gray-900">₹{record.cost}</span>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-3.5 h-3.5" />
            <span>{new Date(record.replacement_date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}</span>
          </div>
          
          {record.technician && (
            <p className="text-sm text-gray-600">Technician: {record.technician}</p>
          )}
          
          {record.notes && (
            <p className="text-sm text-gray-500 mt-2">{record.notes}</p>
          )}
        </div>
      </div>
    </div>
  );
}