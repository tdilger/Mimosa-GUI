import { useTheme } from '@suid/material';
import Backdrop from '@suid/material/Backdrop';
import Card from '@suid/material/Card';
import CardActions from '@suid/material/CardActions';
import CardContent from '@suid/material/CardContent';
import IconButton from '@suid/material/IconButton';
import Slide from '@suid/material/Slide';
import Typography from '@suid/material/Typography';
import { Component, createSignal, For } from 'solid-js';
import { ItemOption } from '../../smart_env/ItemOptions';
import { Item } from '../../smart_env/items';


function ItemOptionMenu(item: Item) {
    /** open and anchor signals to open ItemCardMenu at proper place. */
    const theme = useTheme();
    const [open, setOpen] = createSignal(false);
    const handleClose = () => {
        setOpen(false);
    };
    const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);
    const canBeOpen = () => open() && !!anchorEl();
    const id = () => (canBeOpen() ? "transition-popover" : undefined);

    return (
            <Backdrop
            sx={{ color: "#fff", zIndex: theme.zIndex.drawer + 1 }}
            open={open()}
            onClick={() => setOpen(false)}>
                <Slide direction="down" in={open()} container={anchorEl()}>
                    <Card sx={{ minWidth: 250 }}>
                        <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                            { item.name }
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <div class="flex-row">
                                <For each={item.options}>
                                    {(option: ItemOption) => {
                                        return <IconButton action={ option.action() } aria-label={option.name}>
                                            <img src={option.symbol_src} alt={option.name} />
                                            </IconButton>
                                    }}
                                </For>
                            </div>
                        </CardActions>
                    </Card>
                </Slide>
            </Backdrop>
    )
}

export default ItemOptionMenu;