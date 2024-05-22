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

interface DrawerContentProps {
  onItemClick?: () => void;
}
const maxZoom = 15;

export const DrawerContent = ({ onItemClick }: DrawerContentProps) => {
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
                const zoom = map.getZoom() + 1;
                map.setView([lat, lng], zoom > maxZoom ? maxZoom : zoom);
                onItemClick?.();
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
