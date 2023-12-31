import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function BasicPie({ data }) {
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
    const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
    };

    return (
        <>
            <div
                style={{
                    width: "450px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "2rem",
                    marginRight: "1rem",
                    borderRadius: "8px",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
            >
                <PieChart
                    series={[
                        {
                            data: data,
                            arcLabel: getArcLabel,
                        },
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: "white",
                            fontSize: 14,
                        },
                    }}
                    width={380}
                    height={200}
                />
            </div>
        </>
    );
}
