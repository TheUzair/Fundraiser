'use client';

import { useState } from 'react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      message: 'Your donation was successful!',
      timestamp: '2 hours ago',
      isRead: false,
    },
    {
      id: 2,
      type: 'info',
      message: 'New fundraising campaign has been launched',
      timestamp: '1 day ago',
      isRead: false,
    },
    {
      id: 3,
      type: 'warning',
      message: 'Please update your payment information',
      timestamp: '3 days ago',
      isRead: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const getNotificationStyle = (type) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-500';
      case 'info': return 'bg-blue-50 border-blue-500';
      case 'warning': return 'bg-yellow-50 border-yellow-500';
      default: return 'bg-gray-50 border-gray-500';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No notifications</p>
        ) : (
          notifications.map(notification => (
            <div
              key={notification.id}
              className={`p-4 border-l-4 rounded-lg shadow-sm ${getNotificationStyle(notification.type)} 
                ${notification.isRead ? 'opacity-60' : ''}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{notification.timestamp}</p>
                </div>
                {!notification.isRead && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setNotifications([])}
          className="text-sm text-gray-600 hover:text-gray-800 underline"
        >
          Clear all notifications
        </button>
      </div>
    </div>
  );
}