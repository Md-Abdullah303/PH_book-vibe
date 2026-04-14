import React, { useState } from 'react';
import data from '../../../../public/booksData.json'
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const newData = data.map(book => ({
    name: book.bookName,
    pages: book.totalPages,
    rating: book.rating * 50,
    yearOfPublished: book.yearOfPublishing,
}))
console.log(newData);


export const TriangleBar = (props) => {
    const { x, y, width, height, fill } = props;

    if (x == null || y == null || width == null || height == null) {
        return null;
    }

    const path = `
    M ${x},${y + height}
    L ${x + width / 2},${y}
    L ${x + width},${y + height}
    Z
  `;

    return <path d={path} fill={fill} />;
};





const PagesToRead = () => {
    const [chartType, setChartType] = useState('rating')
    return <>
        <div className="flex  justify-center pt-5">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Sort By {chartType}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setChartType('rating')}><a>Rating</a></li>
                    <li onClick={() => setChartType('pages')}><a>Pages</a></li>
                    <li onClick={() => setChartType('yearOfPublished')}><a>Year of Published</a></li>
                </ul>
            </div>
        </div>
        <div className='bg-blue-300 flex  items-center  justify-center py-5 mx-auto w-[70%] my-10 rounded-xl'>
            <BarChart
                width={1200}
                height={600}
                data={newData}
            >
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>

                {
                    chartType === 'rating' && <Bar
                        dataKey={'rating'}
                        shape={<TriangleBar></TriangleBar>} fill="blue"></Bar>
                }
                {
                    chartType === 'pages' && <Bar
                        dataKey={'rating'}
                        shape={<TriangleBar></TriangleBar>} fill="green"></Bar>
                }
                {
                    chartType === 'yearOfPublished' && <Bar
                        dataKey={'rating'}
                        shape={<TriangleBar></TriangleBar>} fill="red"></Bar>
                }
            </BarChart>
        </div>

    </>
};

export default PagesToRead;