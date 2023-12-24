import { createSelector } from '@reduxjs/toolkit';

export const selectWater = state => state.water.items;

export const selectIsLoading = state => state.water.isLoading;

export const selectError = state => state.water.error;

export const selectTodayWater = createSelector(
    [selectWater],
    (water) => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; 
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();

        const nowdate = year + '/' + month + '/' + day;
        const today = water.filter(({ date }) => date === nowdate)
        return today
    }
);
