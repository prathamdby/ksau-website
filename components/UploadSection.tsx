"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Check } from "lucide-react";

export default function UploadSection() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setUploading(true);
      // Simulating upload process
      setTimeout(() => {
        setUploading(false);
        setUploaded(true);
      }, 2000);
    }
  };

  return (
    <section id="upload" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 rounded-lg p-8 md:p-12 shadow-2xl border border-green-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Upload Your File
          </h2>
          <p className="text-xl text-gray-300 mb-8 text-center">
            Experience the simplicity of ksau file uploads
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Input
              type="file"
              onChange={handleFileChange}
              className="w-full max-w-md text-gray-300 bg-gray-800 border-green-500/50 focus:border-green-500"
            />
            <Button
              onClick={handleUpload}
              disabled={!file || uploading || uploaded}
              className="w-full max-w-md bg-green-500 text-black hover:bg-green-600 disabled:bg-gray-700 disabled:text-gray-500"
            >
              {uploading ? (
                <Upload className="mr-2 h-4 w-4 animate-bounce" />
              ) : uploaded ? (
                <Check className="mr-2 h-4 w-4" />
              ) : (
                <Upload className="mr-2 h-4 w-4" />
              )}
              {uploading ? "Uploading..." : uploaded ? "Uploaded!" : "Upload"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
