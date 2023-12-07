import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Documento,numbres, apellidos,usuario,Telefono,correo,Estado,Administrator) {
  return {Documento,numbres, apellidos,usuario,Telefono,correo,Estado,Administrator };
}

const rows = [
  createData(80123456, 'Usuario', 'Recobros','urecobros', 300400500,'algo@algo.com','Active'),
  createData(80000000, 'Analista De','Recobros','arecobros', 300300400,'algo@algo.com','Active'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Documento</StyledTableCell>
            <StyledTableCell >Nombres</StyledTableCell>
            <StyledTableCell >Apellidos</StyledTableCell>
            <StyledTableCell >Usuario</StyledTableCell>
            <StyledTableCell >Telefono</StyledTableCell>
            <StyledTableCell >Correo</StyledTableCell>
            <StyledTableCell >Estado</StyledTableCell>
            <StyledTableCell >Administrator</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Documento}>
              <StyledTableCell component="th" scope="row">
                {row.Documento}
              </StyledTableCell>
              <StyledTableCell >{row.numbres}</StyledTableCell>
              <StyledTableCell >{row.apellidos}</StyledTableCell>
              <StyledTableCell >{row.usuario}</StyledTableCell>
              <StyledTableCell >{row.Telefono}</StyledTableCell>
              <StyledTableCell >{row.correo}</StyledTableCell>
              <StyledTableCell >{row.Estado}</StyledTableCell>
              <StyledTableCell ><SettingsIcon/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}