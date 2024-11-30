"use client"; // Sử dụng cho các component client-side trong Next.js
import React, { useState } from "react";

const ScheduleTable = () => {
  // Danh sách giờ và sân giả lập
  const hours = ["20:00", "21:00"];
  const fields = ["Sân 1", "Sân 2", "Sân 3", "Sân 4", "Sân 5", "Sân 6"];
  const price = 300; // Giá mỗi sân (300 đ)

  // State để lưu các sân đã chọn và tổng tiền
  const [selectedFields, setSelectedFields] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Xử lý khi người dùng chọn hoặc bỏ chọn sân
  const handleSelect = (hour, field) => {
    const id = `${hour}-${field}`; // ID duy nhất cho mỗi ô
    if (selectedFields.includes(id)) {
      // Nếu đã chọn thì bỏ chọn
      setSelectedFields(selectedFields.filter((item) => item !== id));
      setTotalPrice(totalPrice - price);
    } else {
      // Nếu chưa chọn thì thêm vào danh sách
      setSelectedFields([...selectedFields, id]);
      setTotalPrice(totalPrice + price);
    }
  };

  return (
    <div className="container mx-auto my-6 px-4">
      {/* Bảng hiển thị lịch */}
      <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <table className="table-auto w-full text-center text-sm">
          {/* Header */}
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2">Giờ</th>
              {fields.map((field, index) => (
                <th key={index} className="px-4 py-2">
                  {field}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {hours.map((hour, hourIdx) => (
              <tr key={hourIdx} className="border-b border-gray-300">
                <td className="px-4 py-2 font-semibold">{hour}</td>
                {fields.map((field, fieldIdx) => {
                  const id = `${hour}-${field}`;
                  const isSelected = selectedFields.includes(id);
                  return (
                    <td
                      key={fieldIdx}
                      className={`px-4 py-2 cursor-pointer ${
                        isSelected
                          ? "bg-yellow-400 text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleSelect(hour, field)}
                    >
                      {isSelected ? `${price} đ` : `${price} đ`}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hiển thị tổng tiền */}
      <div className="mt-4 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
        <div>
          <span className="font-semibold">Đã chọn:</span>{" "}
          {selectedFields.length} lịch
        </div>
        <div>
          <span className="font-semibold">Tổng tiền:</span> {totalPrice} đ
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Đặt lịch
        </button>
      </div>
    </div>
  );
};

export default ScheduleTable;
