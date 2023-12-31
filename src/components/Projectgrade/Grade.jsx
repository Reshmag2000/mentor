import "./Grade.css";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grade } from "../../data/data";


const Grade = () => {
    return (


<div className="item grid-common grid-c2">
        <div className="grid-title">


            <h3 className="grid-c-title-text">project Grade</h3>
            </div>
            <div className="table-color">
            {
                grade.map((grade) => (
                        <div className="grid-item" key = { grade.id }>
                            <div className="grid-item-l">
                    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800, backgroundColor: 'rgba(100, 59, 58, 0.8)' }} aria-label="simple table">
        <TableHead>
            {/* <TableRow>
            <TableCell></TableCell>
            <TableCell>phase1</TableCell>
            <TableCell>phase2</TableCell>
            <TableCell>finalgrade</TableCell>
            </TableRow> */}


          <TableRow>
            <TableCell>{grade.group}</TableCell>
            <TableCell >{grade.phase1}</TableCell>
            <TableCell >{grade.phase2}</TableCell>
            <TableCell>{grade.finalgrade}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
    
    </div>
    </div>
    ))
}
            </div>
         </div>

    )
}
export default Grade