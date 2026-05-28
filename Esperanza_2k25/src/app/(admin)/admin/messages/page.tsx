"use client";

import { useEffect, useState } from "react";
import { getAllMessages, deleteMessage } from "@/actions/admin/messages.action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trash2 } from "lucide-react";
import customSwal from "@/utils/swal";

interface Message {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      const result = await getAllMessages();
      if (result.success) {
        setMessages(result.messages || []);
        setFilteredMessages(result.messages || []);
      }
      setLoading(false);
    };
    loadMessages();
  }, []);

  useEffect(() => {
    const filtered = messages.filter(
      (m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMessages(filtered);
  }, [searchQuery, messages]);

  const handleDeleteMessage = async (messageId: string) => {
    const result = await customSwal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete!",
    });

    if (result.isConfirmed) {
      const res = await deleteMessage(messageId);
      if (res.success) {
        customSwal.fire("Deleted!", res.message, "success");
        setMessages((prev) => prev.filter((m) => m._id !== messageId));
      } else {
        customSwal.fire("Error!", res.message, "error");
      }
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Messages
      </h1>

      <Card className="bg-gray-900/80 border-gray-700">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="text-xl text-white">All Messages</CardTitle>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search messages..."
                className="pl-10 bg-gray-800 border-gray-700 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-gray-800/50 animate-pulse"
                >
                  <div className="h-5 w-1/3 bg-gray-700 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-gray-700 rounded" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredMessages.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No messages found
                </div>
              ) : (
                filteredMessages.map((msg) => (
                  <div
                    key={msg._id}
                    className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-white">{msg.name}</h3>
                          <span className="text-sm text-gray-400">{msg.email}</span>
                          <span className="text-sm text-gray-400">• {msg.phone}</span>
                        </div>
                        <p className="text-gray-300">{msg.message}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(msg.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDeleteMessage(msg._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
