import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ScrollArea } from "./components/ui/scroll-area";
import data from "./tuong.json";

const SinhLuc = ({ count }) => (
  <div className="text-xl text-red-600">{"☯︎".repeat(count)}</div>
);

export default function TuongList() {
  return (
    <ScrollArea className="h-screen w-full p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((tuong, idx) => (
          <Card key={idx} className="bg-white rounded-2xl shadow-md">
            <img
              src={tuong.anh}
              alt={tuong.ten}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">
                {tuong.ten}{" "}
                <span className="text-gray-500 text-base">({tuong.tenTQ})</span>
              </h2>
              <div className="text-sm text-gray-600">
                Thế lực: <Badge>{tuong.theLuc}</Badge>
              </div>
              <div>Sinh lực: <SinhLuc count={tuong.sinhLuc} /></div>
              <div className="space-y-2">
                {tuong.kyNang.map((k, i) => (
                  <div key={i} className="bg-gray-50 border p-2 rounded">
                    {k.split("\n").map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
