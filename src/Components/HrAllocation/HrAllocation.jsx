import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import MUIDataTable from 'mui-datatables';
import Container from '@material-ui/core/Container'
import HrAllocationTools from './HrAllocationTools'

const useStyles = makeStyles(theme=>({
    
        root:{
            padding: theme.spacing(3, 2),
            width: 1100,
            height: 500,
         
        },
        paper: {
            padding: theme.spacing(3,2),
            width:1005,
            height:50,
            marginBottom:5,
            marginLeft:25,

        }

}));

const columns = [
    {
        name : "EmployeeId",
        lable: "Employee Id",
        options:{
            filter:true,
            sort:true,

        }

    },
    {
        name: "Name",
        label: "Name",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "Role",
        label: "Role",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "Availability",
        label: "Availability",
        options: {
          filter: true,
          sort: false
        }
      }
    ];
    
    const data = [
        {
            EmployeeId: "E-100",
            Name: "Roshanth",
            Role: "Developer",
            Availability: "30%"
          },
          {
            EmployeeId: "E-101",
            Name: "Vinojan",
            Role: "QA",
            Availability: "80%"
          }
    ];
    
    const options = {
      filterType: "checkbox",
      selectableRowsOnClick: true,
       customToolbarSelect: () => {
         return <HrAllocationTools />;
       }
    };
    






function HrAllocation(){
    const classes = useStyles();

    return(
        <div>
            <Container className={classes.container}>
              <MUIDataTable data={data} columns={columns} options={options} />
            </Container>
        </div>
    );

}

export default HrAllocation;