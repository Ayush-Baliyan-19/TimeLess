import React from 'react'
import "./404.scss"
const Notfound = () => {
  return (
    <div className='NOTFOUNDMAIN w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 text-white font-japanese '>
        <p className=' text-5xl font-semibold opacity-80 tracking-widest'>UMMM..</p>
        <SvgComponent className=" h-64"/>
        <p className='text-5xl font-bold opacity-80 tracking-wider'>Mission Not Found</p>
        <button onClick={()=>{window.location="/"}}>Return To Village</button>
    </div>
  )
}


const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2646.54 3047.36"
    {...props}
  >
    <defs>
      <style>
        {
          ".a{opacity:.2}.b,.f{fill:#39005e}.c{fill:#ffc470}.d{fill:#f72167}.e{fill:#6f6f88}.f{fill-rule:evenodd}.h{opacity:.6}.i{fill:#fff}.j{fill:#f2c5a9}.k{fill:#a6a6a6}.m{opacity:.35}"
        }
      </style>
    </defs>
    <g className="a">
      <ellipse
        cx={1008.34}
        cy={2943.54}
        className="b"
        rx={985.98}
        ry={103.82}
      />
    </g>
    <path
      d="m228.01 1046.17-127.43 91.87 262.67 364.34 127.43-91.87-262.67-364.34z"
      className="c"
    />
    <path
      d="M201.68 959.56a27.6 27.6 0 0 0-38.54-6.24l-128 92.31a30.64 30.64 0 0 0-6.94 42.8L53.75 1124a38.82 38.82 0 0 0 54.19 8.78l125.47-90.46a22.62 22.62 0 0 0 5.12-31.59l-36.85-51.12Z"
      className="c"
    />
    <path
      d="M315.11 1449.29a14 14 0 0 1-13.65-17l39.71-178.36-164.26-11.1a14 14 0 0 1-12.37-18.14L222.28 1042a14 14 0 0 1 26.64 8.42l-52.39 165.77 162.75 11a14 14 0 0 1 12.69 17l-43.24 194.23a14 14 0 0 1-13.62 10.87Z"
      className="b"
    />
    <path
      d="M363.26 1524.73a22.3 22.3 0 0 1-18.14-9.28L82.45 1151.11a22.34 22.34 0 0 1 5.06-31.19L215 1028a22.34 22.34 0 0 1 31.19 5.06l262.67 364.34a22.36 22.36 0 0 1-5.06 31.2l-127.44 91.87a22.23 22.23 0 0 1-13.1 4.26ZM131.77 1143.1l236.53 328.09 91.19-65.74L223 1077.36Z"
      className="b"
    />
    <path
      d="M85.32 1162.39a61.13 61.13 0 0 1-49.7-25.39L10 1101.5a53 53 0 0 1 12-74l128-92.32a50 50 0 0 1 69.73 11.3l36.86 51.12a45 45 0 0 1-10.18 62.79L121 1150.86a60.88 60.88 0 0 1-35.68 11.53Zm94-191.94a5.22 5.22 0 0 0-3.07 1l-128.1 92.31a8.32 8.32 0 0 0-1.88 11.6l25.61 35.52a16.47 16.47 0 0 0 23 3.73l125.46-90.46-17.29-24.48-19.5-27a5.27 5.27 0 0 0-4.27-2.22Z"
      className="b"
    />
    <path
      d="M435.77 1356.06h-1l-192.94-14.15a14 14 0 0 1-12.42-17.91l47.78-162.13L100 1154a14 14 0 0 1 1.24-27.91l195.05 8.64a14 14 0 0 1 12.78 17.9l-47.97 162.66 175.67 12.88a14 14 0 0 1-1 27.89Z"
      className="b"
    />
    <path
      d="M532.84 1280.94 235.6 1495.22l47.06 65.27 297.23-214.29-47.05-65.26z"
      className="c"
    />
    <path
      d="M282.68 1582.83a22.32 22.32 0 0 1-18.15-9.28l-47-65.26a22.33 22.33 0 0 1 5.05-31.19l297.24-214.29a22.34 22.34 0 0 1 31.19 5.06l47 65.26a22.33 22.33 0 0 1-5 31.19l-297.29 214.29a22.22 22.22 0 0 1-13.04 4.22Zm-15.88-82.55 20.91 29 261-188.15-20.91-29Z"
      className="b"
    />
    <path
      d="M407.75 604.46S296.4 496 214.49 430c0 0-66 56.81-113.91 92.63 0 0 132.34 79.63 195.05 157.74 0 0-52.82 11.63-97.22 37-52.66 30.09-97.83 71.7-156.15 60.51 0 0-24 68.53 0 135.82 0 0 206.33-71.92 365.49-179V604.46Z"
      className="d"
    />
    <path
      d="M42.26 936.08a22.35 22.35 0 0 1-21-14.83c-26.42-73.89-1.13-147.64 0-150.74A22.36 22.36 0 0 1 46.47 756c37.32 7.18 69.86-13.53 107.53-37.51 10.71-6.81 21.79-13.86 33.32-20.45 23.15-13.23 48.15-22.9 67.79-29.35C190.75 603.37 90.2 542.49 89.05 541.8a22.34 22.34 0 0 1-1.85-37c46.73-34.95 112.06-91.11 112.71-91.68a22.35 22.35 0 0 1 28.59-.47c81.79 65.8 190.26 171.35 194.84 175.8a22.35 22.35 0 0 1 6.75 16v130.33a22.35 22.35 0 0 1-9.87 18.54C260.5 860.72 58.15 931.85 49.62 934.83a22.58 22.58 0 0 1-7.36 1.25Zm16.7-134c-3.92 18.36-8.13 49.55-1.65 82.27 55.81-21.11 205.27-81.11 328.09-161.59V613.93c-23.55-22.69-104.16-99.68-170.61-154.8-17 14.39-46.62 39.18-75.26 61.74 43.07 28.21 126.21 86.59 173.53 145.53a22.34 22.34 0 0 1-12.62 35.81c-.48.11-50.18 11.29-90.94 34.59-10.61 6.06-21.23 12.82-31.5 19.36-36.4 23.16-73.94 47.12-119 45.95Z"
      className="b"
    />
    <path
      d="m1546.67 2232.88 1.29 2.29c5 9.11 23.74 44.47 31.56 80.28s5 71.84-32.85 82.74c0 0 7.38 17.87 18.55 47 31.84 83.19 94.46 258.15 104.86 372.28 3.91 43.52.28 78.16-15.53 95.53-71.9 78.93-380 44.91-420 0s34.47-97.2 34.47-97.2-50.78-205.7-176.53-326c0 0-48.94 25.14-174.8 0 0 0-112.45 55.92-167.64 274.07 0 0 74.52 78.6 55.19 149.16s-445.13 88.32-505.51-70.56c-10.84-28.49-15.37-63.29-15.42-101.22-.28-143 62.29-330.1 84.13-391.05 4.63-12.85 7.43-20.11 7.43-20.11s-57.54-38.49-39-111.9c7.82-31.06 29.27-68.43 74.52-111.78 2.06-2 4.13-3.91 6.31-5.92l34.24-191.78 2-11.29s-111.4-45.3-133.52-155.52c-12.23-61.12 41.68-229.16 216.25-321.67 121.11-64.24 300.33-92.06 555.79-22.68 143.91 39.1 305.19 149.6 437.14 284.63a1333.32 1333.32 0 0 1 96.48 109.94c80.22 102.12 139.66 210.49 161.89 308.37.03 0-70.24 120.51-241.3 132.39Z"
      className="e"
    />
    <g className="a">
      <path
        d="m1546.67 2232.88 1.29 2.29c-627.69 78.94-1020.86-74.29-1136.61-128.76 2.06-2 4.13-3.91 6.31-5.92l34.24-191.78c157.26 18.88 321.33-47.94 321.33-47.94 605.67 316.63 646.4-133.58 646.4-133.58 82.73 178.5 162.35 96.49 206.43 64.93 80.22 102.12 139.66 210.49 161.89 308.37.05 0-70.22 120.51-241.28 132.39Z"
        className="b"
      />
    </g>
    <g className="a">
      <path
        d="M1654.55 2913c-71.9 78.93-380 44.91-420 0s34.47-97.2 34.47-97.2-50.78-205.7-176.53-326c0 0-48.94 25.14-174.8 0 0 0-112.45 55.92-167.64 274.07 0 0 74.52 78.6 55.19 149.16s-445.13 88.32-505.51-70.56c-10.84-28.49-15.37-63.29-15.42-101.22C321 2780 393.86 2845 490.06 2871.13c141.28 38.27 208.32-7.21 203.51-47.93-3.68-31.19-83.42-32.78-137.64-29.15-17.7 1.19-28.07-19.31-16.85-33.05 20.9-25.58 59-58.17 125.22-76.62a1002.14 1002.14 0 0 1 35.08-96.64c19.25-45.38-5.59-97.35-53.2-110.1-79.47-21.29-191.42-60.56-277.79-127.44 4.63-12.85 7.43-20.11 7.43-20.11s-57.54-38.49-39-111.9c71.72 41.62 274.85 141.95 577.46 148.77 0 0 18.72 47.15 107.26 44.63s177.59-69.6 177.59-69.6 198.43 31.78 380.38-26.54c7.93 35.7 5 71.84-32.85 82.74 0 0 7.38 17.87 18.55 47-44 17-114.78 38.52-210.13 48.48-52.7 5.51-85.71 59.65-66.85 109.17 16.77 44 34.2 93.21 43 128.71 0 0 37.63 3.51 92.68 44.8 14.69 11 8 34.34-10.26 36.18-44.22 4.44-102.78 16.47-107.22 49-6 44.3 265.69 43 363.62-44 3.95 43.47.31 78.13-15.5 95.47Z"
        className="b"
      />
    </g>
    <path
      d="M607.89 2987.34c-143.2 0-292.56-40.83-329.1-136.93-56.21-147.85 44.91-443.17 70.63-513.55-14.42-14.2-35.19-41.1-38.27-80.32-4.15-52.85 24.71-109.09 85.81-167.25l32-179.13c-34.38-18.27-111.36-68.93-130.4-163.86-10.94-54.5 20.87-175.37 125.8-273.48 105.84-98.94 308.69-196.07 674-96.83 138.74 37.69 299.39 141.18 440.74 283.93 141.68 143.08 240.34 301.86 270.7 435.65a22.35 22.35 0 0 1-2.49 16.19c-2.91 5-69 115.53-226.13 139.77 15.26 33.77 34 88.38 18.28 127.5a65.88 65.88 0 0 1-24.22 30.3c14.61 37 46.85 121.29 73.76 210.22 67.76 223.93 45.08 283.33 22.12 308.53-41.73 45.81-135.72 55-207 54.56-96.21-.52-215.23-19.89-246.29-54.75-13.3-14.92-19.19-32.68-17-51.34 3.5-30.18 27.37-55.54 42.75-69-13.22-45.48-62-194.64-156.85-292-24 6.75-75.74 14.56-164.89-2.16-22.11 14.64-102.1 77.53-147.18 244.75 20.65 24.94 70.44 94 52.15 160.83-14.69 53.72-132.69 65.13-182.73 67.54-12.01.49-24.08.83-36.19.83Zm207.16-1608.18c-179.45 0-292.08 62.62-360.21 126.31-94.65 88.49-120 194.79-112.51 232 19.41 96.71 119 138.81 120 139.22a22.41 22.41 0 0 1 13.53 24.61l-36.24 203.1a22.31 22.31 0 0 1-6.83 12.47c-53.26 49.27-79.94 96.12-77.16 135.5 2.68 38 31.49 58.34 32.71 59.19a22.53 22.53 0 0 1 8.28 26.52c-1.33 3.46-132.75 347.37-76.09 496.4 28.45 74.84 162.58 104.86 268.79 107.82 115.81 3.2 188.1-21.34 194.37-35.41 13-47.46-31.66-108.28-50-127.7a22.43 22.43 0 0 1-5.42-20.83c57.07-225.51 174.38-286.15 179.35-288.62a22.35 22.35 0 0 1 14.34-1.91c114.06 22.81 160.13 2.07 160.57 1.86a21.83 21.83 0 0 1 25.31 3.91c129 123.42 180.63 328.17 182.77 336.82a22.35 22.35 0 0 1-8.86 23.65c-8.78 6.23-34.47 28.42-36.65 47.64-.46 4-.18 9.47 6 16.41 13.77 15.46 105.81 39.21 213.17 39.8 85.58.32 150.47-14.48 173.69-40 8.53-9.36 31.45-56.16-31.77-265.2-35.22-116.48-79.82-225-80.26-226.07a22.34 22.34 0 0 1 14.47-30c11.71-3.38 15.49-9.45 17.47-14.36 11.28-28-12.8-87.38-30.63-118.27a22.36 22.36 0 0 1 17.79-33.48c134.86-9.37 201.41-89.51 218.89-114.29-65.78-263.61-404-603-677.39-677.2-104.09-28.22-194.01-39.89-271.48-39.89Z"
      className="b"
    />
    <path
      d="M1282.59 2835.1s16.9-15.13 53.68-20.94c17.76-2.8 39.4-3.89 65.55-.61a11.75 11.75 0 0 0 4.69-23c-36.06-10.23-65.42-11.4-88.23-9.62-42 3.29-62.92 18.77-62.92 18.77a22.34 22.34 0 1 0 27.23 35.43ZM760.88 2743.41s-30.71-14.5-83.71-11.37c-30.83 1.82-69.59 9.15-114.36 29.77a11.75 11.75 0 1 0 8.61 21.86c33.9-11.2 63.45-15.26 88.28-15.77 52.09-1.06 81.17 15.47 81.17 15.47a22.35 22.35 0 1 0 20-40Z"
      className="f"
    />
    <path
      d="M1006.5 2521.58c-86.88 0-149.39-52.6-170.33-73-192.6 3.06-457.38-99.43-468.76-103.87a22.35 22.35 0 0 1 16.26-41.63c2.75 1.07 277 107.19 460.89 100.58a22.43 22.43 0 0 1 17.56 7.55c.55.61 59.52 65.65 144.38 65.65 76.15 0 117.92-22.09 177.53-68.5a22.17 22.17 0 0 1 14.15-4.71c2.53 0 254.57 4.36 341-26.53a22.35 22.35 0 0 1 15 42.08c-85.94 30.74-303.87 29.8-349 29.25-62 47.49-113.35 73.13-198.68 73.13Z"
      className="b"
    />
    <path
      d="M415.28 2103.3s294.51 221.88 1136.43 122.3l-19.79-99.6s-742.43 99.6-1098.17-112.65l-18.47 90Z"
      className="d"
    />
    <g className="a">
      <path
        d="M1551.7 2225.62c-841.93 99.55-1136.44-122.34-1136.44-122.34l9.22-44.8c55.41 35.08 367.36 204.12 1117.33 117.2Z"
        className="b"
      />
    </g>
    <path
      d="M579.89 2076.93c-.86-.31 333.22-94.63 805.33-516.44l50.7 36.24S1173 1866 745.71 2109.13c0 0-77.11 0-165.82-32.2Z"
      className="e"
    />
    <path
      d="M1144.07 2273.43c-216.79 0-374.94-24.27-481.52-49.91-181.3-43.6-257.56-100-260.71-102.37a22.35 22.35 0 0 1-8.45-22.34l18.47-90a22.33 22.33 0 0 1 33.33-14.7C790.1 2200 1521.6 2104.86 1529 2103.87a22.37 22.37 0 0 1 24.89 17.79l19.78 99.59a22.34 22.34 0 0 1-19.29 26.54c-155.14 18.35-291.54 25.64-410.31 25.64Zm-703.84-180.51c26.83 16.3 101.58 56 237 88.17 158 37.46 432.4 71.73 847.79 25.09l-11-55.49c-55.12 6.33-213.12 22.23-398 20.93-291.37-2.07-515.37-43.7-666.6-123.8Zm-25 10.39Z"
      className="b"
    />
    <path
      d="M745.71 2131.48c-3.31 0-82.09-.38-173.44-33.54a22.35 22.35 0 0 1-14.72-21.44c.09-4.81 2-16.54 17.39-21.47 58.09-18.6 369.43-130.63 795.39-511.21a22.36 22.36 0 0 1 27.89-1.51l50.7 36.24a22.36 22.36 0 0 1 3 33.8c-2.65 2.71-270 274.27-695.15 516.2a22.27 22.27 0 0 1-11.06 2.93Zm-94.34-57a518.32 518.32 0 0 0 88.7 12.18c353.34-201.94 594.54-423.09 661.21-487.2l-14.54-10.46c-342.54 303.32-612.22 435.5-735.37 485.45Z"
      className="b"
    />
    <g className="a">
      <path
        d="M1529.58 1682.18c-121 46.92-292.84 59.6-476.52 26.36-249.16-45.08-448.31-161.72-516.41-288.31 121.11-64.24 300.33-92.06 555.79-22.68 143.91 39.1 305.19 149.6 437.14 284.63Z"
        className="b"
      />
    </g>
    <path
      d="M1056.7 2179.26s60.72 152 152.1 250.07a52.65 52.65 0 0 0 61.18 10.8c17.15-8.53 37.93-21.39 56.41-39.61a50.06 50.06 0 0 0 1-70.77c-42.06-43-124.66-121.21-210.36-172.1l-60.35 21.61Z"
      className="d"
    />
    <g className="a">
      <path
        d="M1326.4 2400.53c-18.49 18.21-39.27 31.06-56.42 39.61a52.69 52.69 0 0 1-61.17-10.78c-91.4-98.1-152.12-250.11-152.12-250.11l39.72-14.24c26.65 50.95 65.47 115.47 112.4 165.8a52.69 52.69 0 0 0 61.17 10.84 233.23 233.23 0 0 0 42.34-27c5.48 5.42 10.51 10.51 15.09 15.14a50 50 0 0 1-1.01 70.74Z"
        className="b"
      />
    </g>
    <path
      d="M1246.68 2467.9a74.68 74.68 0 0 1-54-23.09c-93.4-100.25-154.2-250.9-156.74-257.26a22.36 22.36 0 0 1 13.21-29.33l60.35-21.6a22.32 22.32 0 0 1 18.94 1.82c89.21 53 173 132.8 214.93 175.68a72.51 72.51 0 0 1-1.42 102.42c-17.26 17-38.17 31.73-62 43.6a75.41 75.41 0 0 1-33.27 7.76Zm-160-275.62c20 44.54 71 149.33 138.52 221.82a30.1 30.1 0 0 0 35 6c13.38-6.65 33.12-18.26 50.57-35.46a27.79 27.79 0 0 0 .68-39.29c-31.4-32.08-112-110.65-196.82-163Z"
      className="b"
    />
    <path
      d="M999.67 2157.65S866.05 2211.91 761.59 2309a50.5 50.5 0 0 0-14.85 46.89c4.27 20.76 15.94 48.87 46.32 74.06a49.33 49.33 0 0 0 67-3.7c44.42-46.25 130-140.71 170.4-222.72l-30.78-45.85Z"
      className="d"
    />
    <g className="a">
      <path
        d="M1030.43 2203.5c-40.39 82-126 176.47-170.38 222.73a49.33 49.33 0 0 1-67 3.69c-30.39-25.2-42.07-53.3-46.31-74.08a50.31 50.31 0 0 1 14.88-46.84c1.89-1.73 3.74-3.46 5.64-5.14a142.75 142.75 0 0 0 25.81 27.6 49.33 49.33 0 0 0 67-3.69c35.08-36.53 95.86-103.12 139.71-169.94Z"
        className="b"
      />
    </g>
    <path
      d="M824.48 2463.53a71.34 71.34 0 0 1-45.69-16.42c-36-29.83-49.19-63.64-53.94-86.75a72.35 72.35 0 0 1 21.42-67.65c106.35-98.83 239.38-153.48 245-155.76a22.35 22.35 0 0 1 27 8.25l30.78 45.85a22.33 22.33 0 0 1 1.49 22.33c-41.19 83.61-126.9 178.94-174.32 228.32a71.71 71.71 0 0 1-51.74 21.83Zm167.07-277.88c-38.31 17.58-135.82 66.35-214.75 139.69a27.9 27.9 0 0 0-8.17 26c3.31 16.09 12.7 39.79 38.7 61.35a27.08 27.08 0 0 0 36.64-2c43.4-45.19 120.06-130.17 160.57-205.69Z"
      className="b"
    />
    <path
      d="M1056.7 2051.45c61.75 0 111.9 44.78 111.9 99.93s-50.15 99.92-111.9 99.92-111.91-44.77-111.91-99.92 50.14-99.93 111.91-99.93Z"
      className="d"
    />
    <path
      d="M1056.7 2051.45c61.75 0 111.9 44.78 111.9 99.93s-50.15 99.92-111.9 99.92-111.91-44.77-111.91-99.92 50.14-99.93 111.91-99.93Z"
      className="d"
    />
    <g className="a">
      <path
        d="M1168.58 2151.38c0 55.14-50.11 99.94-111.89 99.94s-111.9-44.8-111.9-99.94a90.6 90.6 0 0 1 11-43.13c18 33.58 56.48 56.76 100.89 56.76s82.9-23.18 101-56.76a90.66 90.66 0 0 1 10.9 43.13Z"
        className="b"
      />
    </g>
    <path
      d="M1056.7 2273.65c-74 0-134.26-54.85-134.26-122.28s60.23-122.26 134.26-122.26 134.24 54.85 134.24 122.26-60.22 122.28-134.24 122.28Zm0-199.85c-49.39 0-89.56 34.8-89.56 77.57s40.17 77.59 89.56 77.59 89.55-34.8 89.55-77.59-40.17-77.57-89.55-77.57Z"
      className="b"
    />
    <path
      d="M1529.39 2111.17s6.31-85.24-31-220.15c-16.38-59.3-41.13-128.35-78.75-204.08a12.21 12.21 0 0 0-22.12 10.36c33.16 75.39 54.12 143.69 67.35 202.14 29 128.09 20 207.65 20 207.65a22.34 22.34 0 1 0 44.5 4.08Z"
      className="f"
    />
    <path
      d="M379.71 705.51C447.05 371.15 697.4-94.83 1368.6 49.26c598.57 128.5 593.19 682.69 538.46 824.66-37.37 97-97.51 257-97.51 397.83 0 100.9-94.82 443.65-711.2 333.18-607.11-108.82-811.53-438.17-718.64-899.42Z"
      className="e"
    />
    <g className="a">
      <path
        d="M1810 1244.26c-.28 7.09-.45 14.19-.45 21.22 0 100.89-94.86 443.68-711.21 333.18-607.13-108.83-811.53-438.14-718.63-899.41a1118.47 1118.47 0 0 1 57.43-193.63l-.51 2.35c-92.9 461.27 111.56 790.59 718.64 899.41 395.09 70.83 575.92-44.58 654.73-163.12Z"
        className="b"
      />
    </g>
    <path
      d="M1926.55 784.61c-4.14 37.21-11.23 67.93-19.5 89.33-7.26 18.82-15.36 40-23.74 63.07 11.34-53.24 27.15-105.47 43.24-152.4Z"
      style={{
        fill: "#e35656",
      }}
    />
    <g className="h">
      <path
        d="M1919.45 589.25c-53.24-192.5-198.82-399.48-535.51-471.77-62.51-13.41-121.39-21.51-176.81-24.91-2.9 19.94-46.93 38.88-102.06 43.07-58 4.47-106.31-9-107.93-30.17a10.58 10.58 0 0 1 0-2C610.78 173.46 447.44 513.45 395 773.72c-23.59 117.42-28 226.28-11.36 325.18-33-116.2-33.13-248.26-3.91-393.39C447 371.16 697.37-94.8 1368.58 49.27 1745.55 130.22 1883 380 1919.45 589.25Z"
        className="i"
      />
    </g>
    <path
      d="M792.55 655.82s-126.63 312.9 57 451.08c177.4 133.51 310.57-2.64 496.58 31.55 117.81 21.65 170.22 155.84 313.09 127.84 136.16-26.68 140.53-259.38 119.19-359.83 0 0-430.44-219.47-985.83-250.64Z"
      className="j"
    />
    <path
      d="M1621.56 1292.42c-70.62 0-120.58-37.45-165.49-71.11-36.29-27.2-70.56-52.9-114-60.88-69-12.69-131.89-.18-192.67 11.92-97.23 19.34-197.77 39.35-313.3-47.6-195.1-146.81-69.7-463.88-64.26-477.31a22.34 22.34 0 0 1 22-13.93c553.69 31.07 990.38 250.82 994.73 253a22.34 22.34 0 0 1 11.7 15.26c16 75.49 19.33 228.8-40.14 318.79-24.53 37.12-57 59.86-96.6 67.62a217.81 217.81 0 0 1-41.97 4.24Zm-339.69-182.07a376 376 0 0 1 68.27 6.12c53.77 9.89 93.91 40 132.74 69.08 52.5 39.36 97.84 73.34 172 58.81 27.76-5.44 50-21.27 67.9-48.4 46.93-71 49.21-198.9 35.77-274.32-65.84-31.6-459.63-211.48-950.73-242.52C786.57 741 717.08 979.25 863 1089c99.56 74.93 182.12 58.5 277.71 39.48 45.05-8.94 91.21-18.13 141.16-18.13Z"
      className="b"
    />
    <path
      d="M1323.51 1649.14q-105 0-229.1-22.22C781 1570.76 561.7 1453.43 442.5 1278.21 339.64 1127 311.14 932.82 357.81 701.1c30.29-150.4 117.3-426.43 359.77-585.4C892.22 1.21 1112.84-28.5 1373.29 27.41c231.85 49.78 398.35 165.52 494.88 344 103.3 191 97.12 413.55 59.74 510.53-33.55 87-96 249.09-96 389.79 0 70.19-34.78 181.25-132.78 263.25-90.83 76.02-216.68 114.15-375.62 114.16ZM1131 44.73c-148.66 0-278.86 36.19-388.93 108.34C513.2 303.13 430.53 566.36 401.62 709.92c-44.21 219.5-18 402.25 77.84 543.15C591.64 1418 801.19 1529 1102.29 1582.93c253.18 45.38 449.65 17 568.15-82.2 92.17-77.13 116.77-180.22 116.77-229 0-149 64.4-316.1 99-405.86 25.88-67.15 47.38-279.52-57.36-473.2-90-166.48-246.45-274.68-464.94-321.58Q1241 44.73 1131 44.73ZM379.71 705.51Z"
      className="b"
    />
    <path
      d="M375.81 734.42s774.86-78.83 1481.09 272.49l44.1-126.22S1325.19 522.73 411 590.81c0 0-19.71 44.92-35.23 143.61Z"
      className="d"
    />
    <path
      d="M1856.9 1029.26a22.37 22.37 0 0 1-10-2.34c-361.3-179.73-741.19-243.66-996.26-265.64-276.92-23.87-470.7-4.82-472.62-4.63A22.35 22.35 0 0 1 353.73 731c15.79-100.39 36-147.18 36.84-149.12a22.38 22.38 0 0 1 18.81-13.31C885.14 533.1 1268 614.43 1505.5 688.9c258 80.9 401.29 169.1 407.27 172.81a22.34 22.34 0 0 1 9.29 26.34L1878 1014.28a22.37 22.37 0 0 1-21.1 15ZM574.48 704.59c76.63 0 171.66 2.86 278.95 12.07 253.89 21.79 629.61 84.54 990.68 259.09l29.69-85c-43.42-24.53-177.32-95.23-383.37-159.7-231-72.28-602.2-151.13-1063.48-119-5.51 16.1-15.18 48.27-24.3 97.83 32.95-2.23 92.53-5.29 171.83-5.29ZM1513 1063.84s107.65-9.29 141.57-27.76c0 0 0 142.62-81.45 142.62-80.07 0-60.12-114.86-60.12-114.86Z"
      className="b"
    />
    <path
      d="M1035.61 860.69s59.3 88.21 124 117.22c0 0-79.21 133.66-164.32 65.9-82.77-65.9 40.3-183.12 40.3-183.12Z"
      className="b"
    />
    <path
      d="m839.13 1892.36 596.79 108.11 620.12 144a17.87 17.87 0 0 1 9.11 29.52l-44.52 48.34a17.9 17.9 0 0 1-13.55 5.77l-602.92-13.43-592-235.57a40.89 40.89 0 0 1-20.94-57.28l4.54-8.48a40.88 40.88 0 0 1 43.37-20.98Z"
      className="k"
    />
    <path
      d="M2002.1 2250.42h-.89L1400.94 2237a22.38 22.38 0 0 1-7.79-1.59l-589.38-235.59a63.31 63.31 0 0 1-32.27-88.53l4.52-8.49a62.8 62.8 0 0 1 66.88-32.43l594.17 108.11c.36.07.72.14 1.08.23l617.39 144a40.26 40.26 0 0 1 20.46 66.39l-44.33 48.34a40.1 40.1 0 0 1-29.57 12.98Zm-596.11-58 594.13 13.29 37.79-41.22-609.39-142.1-593.63-108a18.25 18.25 0 0 0-19.42 9.47l-4.53 8.49a18.48 18.48 0 0 0-1.05 15.2 18.22 18.22 0 0 0 10.47 10.82Z"
      className="b"
    />
    <path
      d="M2488.37 1728.15a40.68 40.68 0 0 1-11.84 28.27c-102.4 103.63-333.84 337.81-430.94 436.07a141.4 141.4 0 0 1-107.09 41.9c-136.53-6.31-453.56-20.89-521.38-24a82.11 82.11 0 0 1-25.08-5.14c-76.25-28.6-490.21-183.63-609.2-228.21a35.44 35.44 0 0 1-21.17-44.35c2.91-8.66 6-18 8.77-26.48a30.74 30.74 0 0 1 39.39-19.21l546.46 193.74 499.81-501.22a97 97 0 0 1 93.35-25.36c114.47 30 381.44 100 508.2 133.24a41.33 41.33 0 0 1 29.33 29 37.71 37.71 0 0 1 1.39 11.75Z"
      className="k"
    />
    <g className="h">
      <path
        d="M2488.37 1728.15a40.8 40.8 0 0 1-3.13 15.25 43.24 43.24 0 0 0-15-7.48c-126.76-33.24-393.73-103.24-508.2-133.24a97 97 0 0 0-93.35 25.36c-107.66 108-403.82 405-481.14 482.5a41.77 41.77 0 0 1-43.58 9.89L822.4 1935.52a30.74 30.74 0 0 0-39.4 19.22c-2 6.2-4.19 12.79-6.37 19.27a35.37 35.37 0 0 1-15-41.28c2.91-8.66 6-18 8.77-26.48a30.74 30.74 0 0 1 39.43-19.25l546.46 193.74 499.81-501.22a97 97 0 0 1 93.35-25.36c114.47 30 381.44 100 508.2 133.24a41.33 41.33 0 0 1 29.33 29 37.71 37.71 0 0 1 1.39 11.75Z"
        className="i"
      />
    </g>
    <path
      d="M1945 2256.87q-3.74 0-7.48-.18l-521.41-24a104.32 104.32 0 0 1-31.86-6.53L775 1998a57.6 57.6 0 0 1-34.56-72.37l8.79-26.43a53 53 0 0 1 68-33.22l533.15 189 489.82-491.21a119.79 119.79 0 0 1 114.87-31.2l508.15 133.26a63.65 63.65 0 0 1 29.13 106.31l-431 436.08a164.07 164.07 0 0 1-116.35 48.65ZM799.58 1907.63a8.35 8.35 0 0 0-7.91 5.7l-8.79 26.43a13 13 0 0 0 7.83 16.4l609.17 228.19a60 60 0 0 0 18.23 3.74l521.42 24a119.28 119.28 0 0 0 90.15-35.24l431-436.08a19 19 0 0 0-8.68-31.67l-508.19-133.3a75 75 0 0 0-71.9 19.52l-499.79 501.22a22.35 22.35 0 0 1-23.29 5.28l-546.47-193.71a8.3 8.3 0 0 0-2.78-.48Zm1056.51-328.08Z"
      className="b"
    />
    <path
      d="M1438.25 2134.57a22.47 22.47 0 0 1-8-1.49l-81.55-31.42a22.36 22.36 0 0 1-7.89-36.53c3.75-3.81 376-381.87 500-502.41 25.43-24.71 68-37.33 101.28-6.6 12.92 11.91 20 29.1 20 48.38-.07 24-11 48.81-28.64 64.87-128.94 117.61-476 455.47-479.53 458.87a22.37 22.37 0 0 1-15.67 6.33Zm-41.7-62.36 36.39 14c58.77-57.14 353.43-343.26 470.32-449.88 8.38-7.65 14-20.5 14.07-32 0-4.68-.95-11.15-5.57-15.41-16.88-15.58-37.53 3.57-39.83 5.8-105.33 102.44-390.78 391.66-475.38 477.49Z"
      className="b"
    />
    <path
      d="M1404.17 2225.44a22.36 22.36 0 0 1-21.16-29.55l30.93-90.87a22.35 22.35 0 1 1 42.31 14.41l-30.93 90.86a22.35 22.35 0 0 1-21.15 15.15Z"
      className="b"
    />
    <path
      d="M2073.22 2180c-.53 0-1.07 0-1.61-.06l-638.1-45.42a22.35 22.35 0 0 1 3.17-44.58l638.1 45.42a22.35 22.35 0 0 1-1.56 44.64Z"
      className="b"
    />
    <g className="a">
      <path
        d="M2488.37 1728.15a40.68 40.68 0 0 1-11.84 28.27c-102.4 103.63-333.84 337.81-430.94 436.07a141.4 141.4 0 0 1-107.09 41.9c-136.53-6.31-453.56-20.89-521.38-24a82.11 82.11 0 0 1-25.08-5.14c-76.25-28.6-490.21-183.63-609.2-228.21a35.44 35.44 0 0 1-21.17-44.35c2.91-8.66 563.37 202.55 563.37 202.55l41.43 9.8a95.83 95.83 0 0 0 91.07-26.76l479.9-498S2257 1698 2391.06 1734c50.78 13.59 80.27 7.28 97.31-5.85Z"
        className="b"
      />
    </g>
    <ellipse
      cx={1997.49}
      cy={1927.44}
      className="i"
      rx={65.19}
      ry={41.16}
      transform="rotate(-36.58 1997.39 1927.385)"
    />
    <path
      d="M1866.81 2144.16s59.44-73.83 127.36-60.94 46.16 269.23-176.84 275.65-231.73-230.09-157.33-275.65c81.6-50 206.79 60.94 206.79 60.94Z"
      className="j"
    />
    <g className="h">
      <path
        d="M2022.07 2200.26c-1.11-34.58-13.46-60.61-33.9-64.47-46.85-8.9-89.63 23.46-111.68 44.41a26.12 26.12 0 0 1-33.71 2.06c-37.61-28.28-126-84.84-188.74-46.47-16.53 10.11-28.93 29.67-35.81 53.86-1.78-46.93 14.36-89.67 41.79-106.43 81.62-49.94 206.81 61 206.81 61s59.44-73.85 127.31-61c30 5.7 42.52 58.89 27.93 117.04Z"
        className="i"
      />
    </g>
    <path
      d="M1809 2381.33c-102.49 0-178.62-51.38-204.59-138.69-21.38-71.9-2.08-150.3 43.95-178.47 76-46.51 176.67 19.21 216.36 49.52 24.4-23.76 75.26-63.49 133.62-52.42 36 6.82 56.19 49 51.55 107.44-7.89 99.36-83.89 208.23-231.89 212.49q-4.55.14-9 .13Zm-100.62-288.59c-13.23 0-25.71 2.82-36.69 9.54-25 15.29-41.14 71.46-24.44 127.62 9.89 33.24 46.29 110.25 169.45 106.63 138.47-4 183.72-109.59 188.63-171.36 2.89-36.21-7.23-58.46-15.32-60-53.29-10.12-105.27 52.36-105.78 53a22.35 22.35 0 0 1-32.22 2.71c-25.21-22.24-90.36-68.14-143.64-68.14Z"
      className="b"
    />
    <path
      d="M1159.65 1863.18c-47.1 43.07-80.62-43.13-80.62-43.13s-110.1 109.21-289.71 16.31c0 0-1.5 1.4-4.52 3.74-23.63 18.66-139.49 99.16-330.88 57.32l114.85-283.34s239.88-126.53 414.74-63.08c9 3.29 17.76 7 26.14 11 153.4 73.36 194.58 260.28 150 301.18Z"
      style={{
        fillRule: "evenodd",
        fill: "#6f6f88",
      }}
    />
    <path
      d="M1159.65 1863.18c-47.1 43.07-80.62-43.13-80.62-43.13s-110.1 109.21-289.71 16.31c0 0-1.5 1.4-4.52 3.74-7.43-42.79-31.73-231.33 103.29-292.83 0 0 56.59 6.25 121.56 14.69 153.4 73.4 194.58 260.32 150 301.22Z"
      className="j"
    />
    <g className="h">
      <path
        d="M579.89 1608.53s207.73-94.91 384.22-48c160.86 42.72 210.09 166.21 195.73 288.32 0 0-29.67-197.52-215-242.41s-364.95 2.09-364.95 2.09Z"
        className="i"
      />
    </g>
    <path
      d="M1133.22 1897.58a52 52 0 0 1-11.88-1.38c-22.75-5.32-39.37-24.79-49.93-41.81-42.78 28.86-142 74.44-281.19 7.39a22.35 22.35 0 0 1-27.44-17.85c-7.09-40.88-34.86-248.26 116.05-317a22.25 22.25 0 0 1 11.72-1.87c.57.06 57.55 6.37 122 14.74a22.29 22.29 0 0 1 6.77 2c112.84 54 166 161.22 177.24 236.63 6.87 46.07-.87 82-21.79 101.21-15.24 13.92-29.77 17.94-41.55 17.94Zm26.43-34.4ZM1079 1797.7a22.36 22.36 0 0 1 20.82 14.25c6.06 15.39 20.45 38.14 31.67 40.74 1.28.29 5.17 1.19 13-6 7.2-6.61 12.72-28.73 7.8-61.69-10.27-68.87-60.34-157.36-149.18-201.37C953 1577.17 908.1 1572 892 1570.19c-101.47 51.14-94.81 192.5-87.73 248.69 160.51 80.27 258.1-13.73 259.07-14.7a22.36 22.36 0 0 1 15.66-6.48Z"
      className="b"
    />
    <g className="a">
      <path
        d="M1162.83 1745.85s-4.08 64.64-78.65 0c0 0-140.32 110.13-297.79 0 0 0-225 81.4-332.5 12s-75.5-197.34-75.5-197.34-190 216.49 90.13 338.59c0 0 105.34 42.16 320.82-62.71 0 0 83.8 98.63 289.69-16.29-.03-.03 93.38 167.56 83.8-74.25Z"
        className="b"
      />
    </g>
    <path
      d="M1136.55 1844.92c-7.73 1.23-13.43-4.33-18.24-9.8-12.49-14.2-18.88-33.8-18.88-33.8a23.37 23.37 0 0 0-38.18-9.72c-41.22 38.76-83.61 54.32-121.76 57.61-73.8 6.37-131.27-31.93-131.27-31.93a23 23 0 0 0-25.69 0A385.33 385.33 0 0 1 625.34 1879c-95.09 15-168.62-7.57-168.62-7.57a22.35 22.35 0 0 0-13.36 42.65s82.32 26.19 189 9.74a431 431 0 0 0 163.72-60.51c24.59 13.18 80.45 37.69 147.37 32.07 39.42-3.3 82.76-16.85 125.74-49.4 5.92 10.1 13.64 20.87 23.09 29.06 15.27 13.25 34.3 20.51 56.56 15.11 14-3.4 27.09-14.63 34.9-34.46 10.85-27.5 12.23-75.89-4.38-128.23-19.84-62.5-64.73-131-145.91-173.88-50.73-26.55-122.35-35.19-195.85-30.7A777.07 777.07 0 0 0 723 1539a791.62 791.62 0 0 0-83.38 22.71c-35.18 11.75-63.28 24.29-80.21 34.61a10 10 0 1 0 9.37 17.71c17-7.69 44.84-15.49 78.94-23 24.68-5.41 52.51-10.32 82-14.47a1004.23 1004.23 0 0 1 109.86-9.56c64.76-1.89 127.86 3.52 172.23 27.35a251.52 251.52 0 0 1 111.06 116.69c18.74 40.27 24.79 80.42 21.5 109-.87 7.57-2.35 14.18-4.62 19.48a34.69 34.69 0 0 1-3.18 5.34Z"
      className="f"
    />
    <g className="a">
      <path
        d="M2028.16 2154.56c-.78 80.34-59.38 199.94-210.83 204.3-194.79 5.58-226.08-174.13-181.28-250.05 4.42 91.73 92.63 165 200.84 165 89.38-.03 165.19-50.09 191.27-119.25Z"
        className="b"
      />
    </g>
    <ellipse
      cx={1075.65}
      cy={1009.42}
      className="i"
      rx={29.9}
      ry={20.05}
      transform="rotate(-52.35 1075.688 1009.437)"
    />
    <g className="m">
      <path
        d="M1012.06 966.09c-5.95 11.32-14.78 18.39-19.73 15.79s-4.15-13.89 1.8-25.21 14.77-18.39 19.72-15.79 4.15 13.89-1.79 25.21Z"
        className="i"
      />
    </g>
    <g className="m">
      <ellipse
        cx={1620.86}
        cy={1107.39}
        className="i"
        rx={23.15}
        ry={10.13}
        transform="rotate(-67.82 1620.91 1107.393)"
      />
    </g>
    <ellipse
      cx={1548.21}
      cy={1121.66}
      className="i"
      rx={15.29}
      ry={22.79}
      transform="rotate(-4.31 1547.763 1121.41)"
    />
    <path
      d="M1176.61 1000.78a23.09 23.09 0 0 1-5.55-.68C1061.82 972.89 991 849 988 843.69a22.86 22.86 0 0 1 39.83-22.46c.63 1.12 64.32 112.09 154.29 134.5a22.86 22.86 0 0 1-5.5 45ZM1509 1086.44c-13.34 0-22-.56-23.36-.65a22.86 22.86 0 0 1 3.14-45.62c2 .13 121 7.43 175.2-38.41a22.86 22.86 0 0 1 29.53 34.91c-52.12 44.13-141.99 49.77-184.51 49.77Z"
      className="b"
    />
    <path
      d="M2196.21 980.4a229.89 229.89 0 0 1-32.61-143.83c13-126.85 126.41-219.12 253.26-206.1S2636 756.89 2623 883.74s-126.41 219.12-253.26 206.09a230 230 0 0 1-96.29-32.31l-106.85 24Z"
      style={{
        fill: "#f70200",
      }}
    />
    <path
      d="M2412.33 674.65c-118.5-12.17-225.22 67.56-249.38 181.51a232.48 232.48 0 0 1 1.17-24.63c13-126.85 126.41-219.12 253.26-206.1s219.12 126.42 206.1 253.27a230.54 230.54 0 0 1-3.86 24.47c-.44-116.54-88.76-216.35-207.29-228.52Z"
      className="i"
      style={{
        opacity: 0.5,
      }}
    />
    <path
      d="M2395.35 748.32a96 96 0 0 0-49.18 178.4v29.5a6.94 6.94 0 0 0 7 7h5.81a6.94 6.94 0 0 0 7-7v-20.44c2.09.62 4.19 1.19 6.33 1.71v18.73a6.94 6.94 0 0 0 7 7h5.69a6.93 6.93 0 0 0 6.95-7v-16c1.15 0 2.24.19 3.39.19s2.28-.14 3.43-.19v16a6.94 6.94 0 0 0 6.95 7h5.82a7 7 0 0 0 6.95-7v-18.73c2.1-.52 4.25-1.09 6.29-1.71v20.44a6.94 6.94 0 0 0 7 7h5.82a6.93 6.93 0 0 0 6.95-7v-29.5a95.94 95.94 0 0 0-49.17-178.4Zm-39.89 136.9a29.45 29.45 0 1 1 29.4-29.45 29.44 29.44 0 0 1-29.4 29.45Zm79.82 0a29.45 29.45 0 1 1 29.45-29.45 29.47 29.47 0 0 1-29.45 29.45Z"
      className="i"
    />
    <g className="a">
      <path
        d="M2199.06 969.3c63.24 53.49 150.36 76.92 236.88 55.39 95.94-23.88 166.64-97 192.07-185.62a233.48 233.48 0 0 1-.91 35.78c-13 126.85-126.41 219.13-253.26 206.1a230 230 0 0 1-96.29-32.31l-106.85 24 29.65-101.08c-.45-.77-.86-1.56-1.29-2.26Z"
        className="b"
      />
    </g>
    <path
      d="M2393.76 1113.42a256.34 256.34 0 0 1-26.34-1.36 250.86 250.86 0 0 1-97.69-30.81l-98.28 22a22.34 22.34 0 0 1-26.33-28.09l26.94-91.84a250.8 250.8 0 0 1-30.69-149.07c14.26-138.9 138.84-240.32 277.78-226a253.26 253.26 0 0 1-25.39 505.18Zm-120.35-78.24a22.35 22.35 0 0 1 11.61 3.25 208.56 208.56 0 1 0 129.56-385.73c-114.39-11.79-217 71.77-228.75 186.16a206.57 206.57 0 0 0 29.45 129.89 22.34 22.34 0 0 1 2.37 17.94l-19 64.69 69.84-15.66a22.54 22.54 0 0 1 4.92-.54Z"
      className="b"
    />
  </svg>
)

export default Notfound