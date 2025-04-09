import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { constantsColors } from "../../themes/constantColors";
import React from "react";
import RoundedTextField from "../../utils/RoundedTextField";

const EditTimelineItemModal = ({ open, onClose, item, onSave }) => {
  const [name, setName] = useState(item?.name || "");
  const [start, setStart] = useState(item?.start || "");
  const [end, setEnd] = useState(item?.end || "");
  const [error, setError] = useState("");

  useEffect(() => {
    setName(item?.name || "");
    setStart(item?.start || "");
    setEnd(item?.end || "");
    setError("");
  }, [item]);

  const handleSave = () => {
    if (!name || !start || !end) {
      setError("All fields are required.");
      return;
    }

    if (end < start) {
      setError("End date must be the same or after the start date.");
      return;
    }

    onSave(item.id, { name, start, end });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "16px", 
          padding: 2,
        },
      }}
    >
      <DialogTitle sx={{ color: constantsColors.primaryColor }}>
        Edit Timeline Item
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <RoundedTextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <RoundedTextField
            label="Start Date"
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <RoundedTextField
            label="End Date"
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          {error && <Typography color="error">{error}</Typography>}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ color: constantsColors.thirdColor}}
          onClick={onClose}
          color="inherit"
        >
          Cancel
        </Button>
        <Button
          sx={{ bgcolor: constantsColors.thirdColor, borderRadius: "50px", minWidth:'90px' }}
          onClick={handleSave}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTimelineItemModal;
