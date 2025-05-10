import React from 'react';
import {
    TimelineItem,
    TimelineSeparator,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';
import { Paper, Typography, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { type AnimatedTimelineItemProps } from './interfaces/AnimatedTimelineItemProps';

export function AnimatedTimelineItem({ event, isLast }: AnimatedTimelineItemProps) {
    const theme = useTheme();
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    React.useEffect(() => {
        if (inView) controls.start('visible');
    }, [inView, controls]);

    return (
        <TimelineItem ref={ref}>
            <TimelineSeparator>
                <TimelineDot color="primary">{event.icon}</TimelineDot>
                {!isLast && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={controls}
                        variants={{
                            visible: { height: '100%', transition: { duration: 2 } },
                        }}
                        style={{
                            backgroundColor: theme.palette.primary.main,
                            width: 2,
                            margin: '0 auto',
                        }}
                    />
                )}
            </TimelineSeparator>
            <TimelineContent>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                    }}
                >
                    <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            {event.year}
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 0.5 }}>
                            {event.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                            {event.description}
                        </Typography>
                    </Paper>
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    );
}
