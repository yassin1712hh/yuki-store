import React, { useState, useEffect } from 'react';
import { CheckCircle, X, AlertCircle, Info } from 'lucide-react';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  duration?: number;
}

interface NotificationSystemProps {
  notifications: Notification[];
  onRemove: (id: string) => void;
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({ notifications, onRemove }) => {
  useEffect(() => {
    notifications.forEach((notification) => {
      const duration = notification.duration || 10000; // 10 seconds default
      const timer = setTimeout(() => {
        onRemove(notification.id);
      }, duration);

      return () => clearTimeout(timer);
    });
  }, [notifications, onRemove]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-success-green" size={24} />;
      case 'error':
        return <AlertCircle className="text-danger-red" size={24} />;
      default:
        return <Info className="text-primary-blue" size={24} />;
    }
  };

  const getColors = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-success-green bg-success-green/10';
      case 'error':
        return 'border-danger-red bg-danger-red/10';
      default:
        return 'border-primary-blue bg-primary-blue/10';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`max-w-sm bg-card-bg border-2 rounded-2xl p-4 shadow-2xl animate-slide-up ${getColors(notification.type)}`}
        >
          <div className="flex items-start space-x-3">
            {getIcon(notification.type)}
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">{notification.title}</h4>
              <p className="text-text-gray text-sm">{notification.message}</p>
            </div>
            <button
              onClick={() => onRemove(notification.id)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="text-text-gray" size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem;