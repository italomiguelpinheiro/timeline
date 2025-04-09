import { Box, Typography, Paper, Divider } from "@mui/material";
import Timeline from "../Timeline/Timeline";
import { constantsColors } from "../../themes/constantColors";
import EventIcon from "@mui/icons-material/Event";
import { motion } from "framer-motion";
import TimelineFeaturesInfo from "../Home/TimelineFeaturesInfo";

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Box p={{ xs: 2, md: 4 }}>
      <MotionBox
        display="flex"
        alignItems="center"
        mb={1}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <EventIcon fontSize="large" sx={{ color: constantsColors.primaryColor }} />
        <Typography variant="h4" fontWeight={600} pl={1} color={constantsColors.primaryColor}>
          Timeline
        </Typography>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        mb={4}
      >
        <Typography fontSize="18px" color={constantsColors.primaryColor}>
          Visualize and organize your events in a simple, fast, and effective way.
          Make your routine lighter with an interactive timeline designed to make your work flow.
        </Typography>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        mb={4}
      >
        <TimelineFeaturesInfo />
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        mb={4}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            color: constantsColors.primaryColor,
            boxShadow: `0 4px 20px ${constantsColors.primaryColor}33`,
          }}
        >
          <Typography variant="h6" fontWeight="500" mb={2}>
            Your Events
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Timeline />
        </Paper>
      </MotionBox>
    </Box>
  );
};

export default Home;
