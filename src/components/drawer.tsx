import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { useMarkers } from '../api/provider.tsx';
import { useMap } from 'react-leaflet';

export const DrawerContent = () => {
  const { markers } = useMarkers();
  const map = useMap();

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {markers.map(({ title, id, lat, lng }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              onClick={() => {
                map.setView([lat, lng], map.getZoom() + 1);
              }}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
