import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import timelineItemsData from "../../utils/timelineItems";
import { assignLanes } from "../../utils/assignLanes";
import TimelineItem from "../TimelineItem/TimelineItem";
import "./Timeline.css";
import { constantsColors } from "../../themes/constantColors";
import RoundedTextField from "../../utils/RoundedTextField";

const Timeline = () => {
  const [zoom, setZoom] = useState(1);
  const [showLabels, setShowLabels] = useState(true);
  const [items, setItems] = useState(timelineItemsData);
  const [searchTerm, setSearchTerm] = useState("");

  const minZoom = 1;
  const zoomStep = 1.2;

  const handleZoom = (inOrOut) => {
    setZoom((prev) => {
      const newZoom = inOrOut === "in" ? prev * zoomStep : prev / zoomStep;
      return Math.max(newZoom, minZoom);
    });
  };

  const handleUpdateItem = (id, updatedData) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lanes = assignLanes(filteredItems);

  const allDates = filteredItems.flatMap((item) => [
    new Date(item.start),
    new Date(item.end),
  ]);

  const minDate = new Date(Math.min(...allDates));
  const maxDate = new Date(Math.max(...allDates));
  const totalDays = (maxDate - minDate) / (1000 * 60 * 60 * 24) + 1;

  const getOffsetPercent = (date) => {
    const daysFromStart = (new Date(date) - minDate) / (1000 * 60 * 60 * 24);
    return (daysFromStart / totalDays) * 100;
  };

  const getWidthPercent = (start, end) => {
    const durationDays =
      (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24) + 1;
    return (durationDays / totalDays) * 100;
  };

  const colors = [
    "#005f73",
    "#0a9396",
    "#94d2bd",
    "#e9d8a6",
    "#ee9b00",
    "#ca6702",
    "#bb3e03",
  ];
  const getLaneColor = (index) => colors[index % colors.length];

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        mb={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" spacing={2}>
          <Button
            sx={{
              bgcolor: constantsColors.thirdColor,
              borderRadius: "50px",
              textTransform: "none",
            }}
            variant="contained"
            onClick={() => handleZoom("in")}
          >
            Zoom In
          </Button>
          <Button
            sx={{
              bgcolor: constantsColors.thirdColor,
              borderRadius: "50px",
              textTransform: "none",
            }}
            variant="contained"
            onClick={() => handleZoom("out")}
            disabled={zoom <= minZoom}
          >
            Zoom Out
          </Button>
          <Button
            sx={{
              bgcolor: constantsColors.secondaryColor,
              borderRadius: "50px",
              color: "#fff",
              textTransform: "none",
            }}
            variant="contained"
            onClick={() => setShowLabels((prev) => !prev)}
          >
            {showLabels ? "Hide Labels" : "Show Labels"}
          </Button>
        </Stack>
        <RoundedTextField
          label="Search Event"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ minWidth: 240 }}
        />
        <Box alignSelf="end" fontSize={"15px"}>
          Zoom: {zoom.toFixed(1)}x
        </Box>
      </Stack>

      <Box className="timeline-container" sx={{ overflowX: "auto" }}>
        {lanes.map((lane, laneIndex) => (
          <Box
            className="timeline-lane"
            sx={{
              display: "flex",
              position: "relative",
              width: `${100 * zoom}%`,
              minWidth: "100%",
              mb: 1,
            }}
            key={laneIndex}
          >
            {lane.map((item) => {
              const left = getOffsetPercent(item.start);
              const width = getWidthPercent(item.start, item.end);
              const color = getLaneColor(laneIndex);

              return (
                <TimelineItem
                  key={item.id}
                  item={item}
                  left={left}
                  width={width}
                  onUpdate={handleUpdateItem}
                  color={color}
                  showLabel={showLabels}
                />
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Timeline;
