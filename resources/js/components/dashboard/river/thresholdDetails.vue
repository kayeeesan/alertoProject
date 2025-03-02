<template>
    <v-col style="padding: 0 !important;">
      <v-sheet class="pa-4" rounded="lg" style="position: relative; background: #F8FAF0; border: 1px solid #E0E0E0;">
        <span class="header-bar"></span>
        <h1 class="text-h6">THRESHOLD DETAILS</h1>
        <hr class="section-divider" />
  
        <v-row>
          <v-col v-for="(item, index) in thresholds" :key="index" cols="12" sm="6" md="3">
            <v-card :style="{ height: '100px', background: item.color }" class="d-flex align-center">
              <v-row class="pa-2">
                <v-col cols="4" class="d-flex justify-center align-center">
                  <v-icon :color="item.iconColor" size="32">{{ item.icon }}</v-icon>
                </v-col>
                <v-col cols="8" class="text-dark text-center">
                  <p class="font-weight-bold text-body-2" :style="{ color: item.textColor }">{{ item.value }}</p>
                  <p class="text-caption" :style="{ color: item.textColor }">{{ item.unit }}</p>
                  <p class="font-weight-bold " style="font-size: 12px;" :style="{ color: item.textColor }">{{ item.label }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </template>
  
  <script>
  export default {
    data() {
      return {
        thresholds: [
          { value: 'RAIN', unit: 'THRESHOLD', label: '', icon: 'mdi-weather-rainy', iconColor: '#64826E', color: '#C8E6C9', textColor: '#000000' },
          { value: '7.5-15', unit: 'MM', label: 'MONITOR', icon: 'mdi-alert-circle', iconColor: '#FFEB3B', color: '#FFF9C4', textColor: '#000000' },
          { value: '15-30', unit: 'MM', label: 'ALERT', icon: 'mdi-alert', iconColor: '#FF9800', color: '#FFCC80', textColor: '#000000' },
          { value: '30+', unit: 'MM', label: 'EVACUATION', icon: 'mdi-alert-octagon', iconColor: '#D32F2F', color: '#FFCDD2', textColor: '#000000' },
          { value: 'WATER LEVEL', unit: 'THRESHOLD', label: '', icon: 'mdi-water', iconColor: '#64826E', color: '#C8E6C9', textColor: '#000000' },
          { value: '60%', unit: 'BANKFULL', label: 'WARNING', icon: 'mdi-water-alert', iconColor: '#FFEB3B', color: '#FFF9C4', textColor: '#000000' },
          { value: '80%', unit: 'BANKFULL', label: 'ALERT', icon: 'mdi-water-check', iconColor: '#FF9800', color: '#FFCC80', textColor: '#000000' },
          { value: '100%', unit: 'BANKFULL', label: 'CRITICAL', icon: 'mdi-water-remove', iconColor: '#D32F2F', color: '#FFCDD2', textColor: '#000000' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .header-bar {
    background: var(--primary-color);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    height: 11px;
  }
  .section-divider {
    border: 2px solid var(--primary-color);
    margin: 10px 0;
  }
  .text-body-2 {
    font-size: 12px;
    line-height: 1.2;
    margin: 0;
  }
  .text-caption {
    font-size: 10px;
    line-height: 1.2;
    margin: 0;
  }
  </style>
  