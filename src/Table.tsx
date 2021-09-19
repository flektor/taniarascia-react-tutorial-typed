
import { Button, Table as MuiTable, TableBody as MuiTableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export interface CharacterData {
    name: string;
    job: string;
}


export interface TableBodyProps {
    characterData: CharacterData[];
    removeCharacter: Function;
};



const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Job</TableCell>
                <TableCell align="left"></TableCell>
            </TableRow>
        </TableHead>
    )
}


const TableBody = (props: TableBodyProps) => {

    const rows = props.characterData.map((row: CharacterData, index: number) => {
        return (
            <TableRow key={index}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.job}</TableCell>
                <TableCell align="left">
                    <Button onClick={() => props.removeCharacter(index)}>Delete</Button>
                </TableCell>
            </TableRow>
        )
    });

    return <MuiTableBody>{rows}</MuiTableBody>
}


export const Table = (props: TableBodyProps) => {

    const { characterData, removeCharacter } = props as any;

    return (
        <TableContainer>
            <MuiTable>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </MuiTable>
        </TableContainer>
    )
};