"use client";

export function BrowseByStyle() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-6xl font-bold ">BROWSE BY DRESS STYLE</h1>

      {/* Grid Layout */}
      <div className="relative w-full max-w-[1200px] h-[800px]">
        {/* Casual */}
        <div
          className="absolute overflow-hidden group"
          style={{
            width: "407px",
            height: "289px",
            top: "192px",
            left: "64px",
            borderRadius: "20px 0px 0px 0px",
          }}
        >
          <Image
            src="/images/style/causal.png"
            alt="Casual"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300">
            <p className="text-white font-semibold text-lg"></p>
          </div>
        </div>

        {/* Formal */}
        <div
          className="absolute overflow-hidden group"
          style={{
            width: "684px",
            height: "289px",
            top: "192px",
            left: "491px",
            borderRadius: "20px 0px 0px 0px",
          }}
        >
          <Image
            src="/images/style/pro.png"
            alt="Formal"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300">
            <p className="text-white font-semibold text-lg"></p>
          </div>
        </div>

        {/* Party */}
        <div
          className="absolute overflow-hidden group"
          style={{
            width: "684px",
            height: "289px",
            top: "501px",
            left: "64px",
            borderRadius: "20px 0px 0px 0px",
          }}
        >
          <Image
            src="/images/style/party.png"
            alt="Party"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300">
            <p className="text-white font-semibold text-lg"></p>
          </div>
        </div>

        {/* Gym */}
        <div
          className="absolute overflow-hidden group"
          style={{
            width: "407px",
            height: "289px",
            top: "501px",
            left: "768px",
            borderRadius: "20px 0px 0px 0px",
          }}
        >
          <Image
            src="/images/style/gym.png"
            alt="Gym"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300">
            <p className="text-white font-semibold text-lg"></p>
          </div>
        </div>
      </div>
    </div>
  );
}



import Image from 'next/image';



