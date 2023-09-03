import { Typography, List, styled } from '@mui/material/';
import { Box } from "@mui/material";
import { Colors } from './theme';

// Container
export const AppbarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(4),
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0.5, 2),
}));

// Header
export const AppbarHeader = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  flexGrow: 1,
  fontSize: "4em",
  color: Colors.secondary,
}));

// List Component
interface MyListProps {
  type: 'row' | 'block';
}

export const MyList = styled(List)<MyListProps>(({ type, theme }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignItems: 'center',
  color: Colors.secondary,
}));
