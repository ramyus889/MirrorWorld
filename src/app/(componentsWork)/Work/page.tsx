"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="">
      <div className="inline-block">
        <div className="conatiner text-[20px] mx-[300px] flex flex-col gap-[100px] pt-20 mb-20 ">
          <ul className="grid grid-cols-3 gap-10">
            {users.map((obj) => (
              <li
                className="bg-slate-600  gap-5 px-4 py-2 rounded-xl my-2"
                key={obj.id}
              >
                <div className="flex flex-col gap-5">
                  <div className="">Name: {obj.name}</div>
                  <div className="">UserName: {obj.username}</div>
                  <div className="">Email: {obj.email}</div>
                  <div className="">Address: {obj.address.street}</div>
                  <div className="">
                    Geo: {obj.address.geo.lat} - {obj.address.geo.lng}
                  </div>
                  <div className="">Phone: {obj.phone}</div>
                  <div className="">Website: {obj.website}</div>
                  <div className="">Company: {obj.company.name}</div>{" "}
                  https://my-json-server.typicode.com/ramyus889/jsonServer
                </div>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-3 gap-10">
            {imageUser.map((obj) => (
              <li
                className="bg-slate-600  gap-5 px-4 py-2 rounded-xl my-2"
                key={obj.id}
              >
                <div className="flex flex-col gap-5">
                  <div className="">Name: {obj.name}</div>
                  <div className="">UserName: {obj.username}</div>
                  <div className="">Email: {obj.email}</div>
                  <div className="">Address: {obj.address.street}</div>
                  <div className="">
                    Geo: {obj.address.geo.lat} - {obj.address.geo.lng}
                  </div>
                  <div className="">Phone: {obj.phone}</div>
                  <div className="">Website: {obj.website}</div>
                  <div className="">Company: {obj.company.name}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
