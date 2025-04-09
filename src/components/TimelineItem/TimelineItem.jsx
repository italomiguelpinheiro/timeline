import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import EditTimelineItemModal from "./EditTimelineItemModal";
import "./TimelineItem.css";
import { constantsColors } from "../../themes/constantColors";

const TimelineItem = ({ item, left, width, onUpdate, color, showLabel }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const safeLeft = Math.max(left, 0);
  const safeWidth = Math.min(width, 100 - safeLeft);

  return (
    <>
      <Box
        sx={{
          left: `${safeLeft}%`,
          width: `${safeWidth}%`,
          backgroundColor: color || "#4a90e2",
          zIndex: showTooltip ? 2 : 1,
        }}
        className="timeline-item"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setOpenModal(true)}
      >
        {showLabel && (
          <Box className={"timeline-item-text"}>{item.name}</Box>
        )}
        {showTooltip && (
          <Paper elevation={4} className="tooltip">
            <Box fontSize={'16px'} pb='10px' color={constantsColors.primaryColor} fontWeight={'medium'}>{item.name}</Box>
            <Box>Start: {item.start}</Box>
            <Box>End: {item.end}</Box>
          </Paper>
        )}
      </Box>

      <EditTimelineItemModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        item={item}
        onSave={onUpdate}
      />
    </>
  );
};

export default TimelineItem;
