import {
    Box,
    Typography,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import { constantsColors } from "../../themes/constantColors";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
  import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
  import FilterAltIcon from "@mui/icons-material/FilterAlt";
  import EditIcon from "@mui/icons-material/Edit";
  import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
  
  const features = [
    {
      icon: <DashboardIcon sx={{ color: constantsColors.primaryColor }} />,
      text: "View events interactively",
    },
    {
      icon: <ZoomInMapIcon sx={{ color: constantsColors.primaryColor }} />,
      text: "Use zoom in and zoom out",
    },
    {
      icon: <VisibilityOffIcon sx={{ color: constantsColors.primaryColor }} />,
      text: "Hide or show event labels",
    },
    {
      icon: <FilterAltIcon sx={{ color: constantsColors.primaryColor }} />,
      text: "Filter events by type or date",
    },
    {
      icon: <EditIcon sx={{ color: constantsColors.primaryColor }} />,
      text: "Edit events by clicking on them",
    },
    {
      icon: <InfoOutlinedIcon sx={{ color: constantsColors.primaryColor }} />,
      text: "View details on hover",
    },
  ];
  
  const TimelineFeaturesInfo = () => {
    return (
      <Box
        p={{ xs: 2, md: 4 }}
        mb={4}
        sx={{
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          boxShadow: `0 2px 12px ${constantsColors.primaryColor}22`,
          color: constantsColors.primaryColor,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Timeline Features:
        </Typography>
  
        <Box
          display="flex"
          flexWrap="wrap"
          gap={2}
          justifyContent="flex-start"
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              minWidth={{ xs: "100%", sm: "45%", md: "30%" }}
            >
              <ListItem disablePadding>
                <ListItemIcon>{feature.icon}</ListItemIcon>
                <ListItemText primary={feature.text} />
              </ListItem>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  
  export default TimelineFeaturesInfo;
  