import { useLoaderData } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useRef } from "react";
import { getPreviousDonations } from "../../Utility/localStorage";
import Header from "../Header/Header";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

/* In Chart.js version 3 and above, the library has modularized its components, meaning that features like charts, tooltips, legends, etc., must be explicitly registered before use. This helps optimize performance and reduce the size of the library by only including what you need. */

const Statistics = () => {
    const branches = useLoaderData(); 
    const prevData = getPreviousDonations();

    const donatedBranches = branches.filter(branch => prevData.includes(branch.id.toString()));

    const totalBranches = branches.length;
    const donatedCount = donatedBranches.length;
    const notDonatedCount = totalBranches - donatedCount;

    const data = {
        labels: ['Donated', 'Not Donated'],
        datasets: [
            {
            data: [donatedCount, notDonatedCount],
            backgroundColor: ['#4CAF50', '#FF6384'],
            hoverBackgroundColor: ['#45a049', '#ff4b5c']
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        radius: '80%'
    };

    // Create a ref to store the chart instance
    const chartRef = useRef(null);

    // useEffect hook for cleanup
    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    const handleChartReady = (chart) => {
        chartRef.current = chart;  // Save the chart instance
    };

    return (
        <div className="fontInter mb-32">
            <div className="mb-20">
                <Header />
            </div>
            <div className="max-w-lg mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Donation Statistics:</h2>
                <div className="mx-auto">
                    <Pie data={data} options={options} onReady={handleChartReady} />
                </div>
            </div>
        </div>
    );
};


export default Statistics;


/* data:
Label: tell what each slice represents ("Donated" or "Not Donated").
Data: provides the numbers that determine the size of each slice.
Colors: make the slices visually distinct and change when you hover over them.

option:
responsive: true ensures the chart resizes to fit the screen.
legend: settings make the legend (which shows what each color represents) appear at the top of the chart.*/

/* Inside the useEffect, the return statement provides a cleanup function that React calls just before the component is removed from the screen.
This is useful for cleaning up things like timers, subscriptions, or in this case, charts. 

Mounting a Chart: When you mount a chart (like when you first load the Statistics page), Chart.js creates a canvas and draws the chart on it.

Navigating Away or Updating: If you navigate away from the page or update the chart data without properly cleaning up:

The Old Chart: The old chart is still tied to that canvas. It hasn’t been destroyed, so it remains there in the background.
New Chart Attempt: If you try to create a new chart using the same canvas (either by navigating back to the Statistics page or updating the data), Chart.js sees that the canvas is already in use for the old chart.*/
