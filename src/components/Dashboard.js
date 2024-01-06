import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme 
import "ag-grid-community/styles/ag-theme-material.css";

import '../App.css';
import react, { useState, useEffect, useCallback, useRef, } from "react";
import { Typography, TextField, Button, AppBar, Container } from '@mui/material';
import { AgChartsReact } from 'ag-charts-react';
import { useNavigate } from "react-router-dom";

//The main dashboard function
function Dashboard() {
    const navigate = useNavigate();
    //Navigate to login page after clicking on logout button
    const HandelLogout = () => {
        navigate('/');
    }


    return (
        <div>
            <AppBar position="static">
                <div className="container">
                    <img src="https://finkraft.ai/assets/Logo_black.svg" alt="img"></img>
                    <Button style={{ marginLeft: 'auto', marginRight: '10px' }} variant="contained" color="primary" onClick={HandelLogout} >{"Logout"} </Button>
                </div>
            </AppBar>
            <Container id="text-container" >
                <Typography variant="h3" align='center' color='revert-layer' marginBottom='20px'>SpaceVue</Typography>
                <Typography variant='overline' textTransform='initial' display="block" >    Welcome to SpaceVue, your window to the cosmos! SpaceVue is an innovative space mission monitoring application designed to bring you the latest and most comprehensive data on recent space missions. Whether you are a space enthusiast, a scientist, or just curious about what's happening beyond our atmosphere, SpaceVue provides a user-friendly dashboard that encapsulates the details of recent space missions.</Typography>
                <Typography variant='overline' textTransform='initial' display="block" marginTop='20px'>    Explore the wonders of space with SpaceVue, where we strive to make the complexities of space missions easily understandable for everyone. Our visually appealing and intuitive interface ensures that you have a seamless experience as you delve into the vast universe of space exploration. Join us on this cosmic journey as we track the latest missions and unravel the mysteries of the cosmos together. SpaceVue: Discover the universe, one mission at a time.</Typography>
            </Container>
            <GridAndChart />
        </div>
    )
}

//GridAndChart function is used in dashboard function in the return statement
function GridAndChart() {
    // Row Data: The data to be displayed.
    var [rowData, setRowData] = useState(null);
    // Column Definitions: Defines & controls grid columns.
    var [colDefs, setColDefs] = useState(null);
    const gridRef = useRef();


    const [pieChartOptions, setPieChartOptions] = useState({
        data: [
            { asset: 'successful', percentage: 89.1 },
            { asset: 'unsuccessful', percentage: 10.9 },
        ],
        title: {
            text: 'Successful and Unsuccessful Missions ',
        },
        // Series: Defines which chart type and data to use
        series: [{ type: 'pie', angleKey: 'percentage', legendItemKey: 'asset', }],
        width: '100px',
        height: '100px',
        margin: '20px'
    });

    //Fetching the data from the given API and setting the rowData and Column Definations
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
            .then(data => data.json())
            .then(data => {
                let cols = [];
                //Getting column definations from the data received from the API response
                if (data.length > 0) {
                    for (let i = 0; i < Object.keys(data[0]).length; i++) {
                        let a = { field: Object.keys(data[0])[i] };
                        cols.push(a);
                    }
                    setColDefs(cols);
                    setRowData(data);
                    console.log("rowData", rowData)

                    //Recalculating the success percentage bases on the data received from the API
                    if (rowData)
                        CalculateSuccessfulMissions();
                }


            }).catch(err => console.error("Error fetching data:", err))

    }, []);

    //Recalculating the success percentage bases on the data received from the API as it is a async process. The chart data is changed after the state variable "rowData" is changed.
    useEffect(() => {
        console.log("rowData", rowData);

        if (rowData) {
            CalculateSuccessfulMissions();
        }
    }, [rowData]);

    //Function to calculate the successful missions' percentage
    function CalculateSuccessfulMissions() {
        let successfulMissions = 0;
        let percentageSuccessful = 0;
        for (let i = 0; i < rowData.length; i++) {
            if (rowData[i].successful == true) {
                successfulMissions++;
            }
        }
        percentageSuccessful = (successfulMissions * 100.0) / rowData.length;
        let chartData = pieChartOptions;
        chartData.data = [
            { asset: 'successful', percentage: percentageSuccessful },
            { asset: 'unsuccessful', percentage: 100 - percentageSuccessful }
        ]
        setPieChartOptions(chartData);
        console.log(successfulMissions, rowData.length - successfulMissions, rowData.length)
        return chartData;
    }

    //Function to filterout rows based on the input
    const onFilterTextBoxChanged = useCallback(() => {
        gridRef.current.api.setGridOption(
            'quickFilterText',
            document.getElementById('filter-text-box').value
        );
    }, []);


    return (
        <div className="ag-theme-quartz" style={{ marginLeft: 80, height: 600, width: 1100 }}>
            <div className="example-header" style={{ display: "flex", alignItems: 'center', maxHeight: "50px", maxWidth: '350px', marginBottom: '5px', backgroundColor: 'white', borderRadius: '5px' }}>
                <Typography varient='string' margin='10px' >Quick Filter:</Typography>
                <TextField id='filter-text-box'
                    size='small'
                    onInput={onFilterTextBoxChanged}
                />
            </div>


            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={colDefs}
                overlayLoadingTemplate={'<span className="ag-overlay-loading-center">Loading the content ...</span>'}
                overlayNoRowsTemplate={'<span className="ag-overlay-no-rows-center">No data available / An error occured while loading data</span>'}
            />

            <div >
                <AgChartsReact id="piechart" options={pieChartOptions} />
            </div>
        </div>
    );
}

export default Dashboard;

