import { Tabs as MuiTabs, Tab, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import Characters from "./Characters"
import WikipediaApi from "./Wikipedia-api"

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


const TabPanel = (props: TabPanelProps) => {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'} >{children}</Typography>
                </Box>
            )}
        </div>
    )
}


export const Tabs = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }; 

    return (
        <div> 
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <MuiTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Characters" />
                    <Tab label="Wikipedia" />
                </MuiTabs>
            </Box> 
            <TabPanel value={value} index={0}>
                <Characters />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <WikipediaApi />
            </TabPanel>
        </div>
    )

}


