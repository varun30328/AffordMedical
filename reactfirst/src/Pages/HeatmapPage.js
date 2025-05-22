import React from "react";
import { Box, Typography } from "@mui/material";
import CorrelationHeatmap from "..//Components/CorrelationHeatmap";

function HeatmapPage() {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>Stock Correlation Heatmap</Typography>
      <CorrelationHeatmap />
    </Box>
  );
}

export default HeatmapPage;
