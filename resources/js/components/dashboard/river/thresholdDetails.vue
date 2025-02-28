<template>
                <v-col style="padding: 0 !important;">
                    <v-sheet class="pa-4" rounded="lg"  style="position: relative; background: #F8FAF0; border: 1px solid #E0E0E0;">
                        <span style="background: var(--primary-color); position: absolute; left: 0; right: 0; top: 0; border-top-left-radius: 11px; border-top-right-radius: 11px; height: 11px;">.</span>
                        <h1>THRESHOLD DETAILS</h1>
                        <hr style="border: 2px solid var(--primary-color); margin: 10px 0;">

                        <v-row>
                            <v-col cols="12" sm="6" md="3">
                                <v-card style="height: 100px;">
                                    <v-row class="pa-4">
                                        <v-col cols="4" >
                                            <div class="icon">
                                                <img src="" alt="">
                                            </div>
                                        </v-col>
                                        <v-col cols="8">
                                            <p style="color: #64826E;">RAIN</p>
                                            <p style="font-size: 13px;">THRESHOLD</p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                 <v-card style="height: 100px;">
                                    <v-row class="pa-4">
                                        <v-col cols="4" >
                                            <div class="icon">
                                                <img src="" alt="">
                                            </div>
                                        </v-col>
                                        <v-col cols="8">
                                            <p style="font-size: 13px;">7.5-15</p>
                                            <p style="font-size: 13px;">MM</p>
                                            <p style="font-size: 13px;">MONITOR</p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                 <v-card style="height: 100px;">
                                    <v-row class="pa-4">
                                        <v-col cols="4" >
                                            <div class="icon">
                                                <img src="" alt="">
                                            </div>
                                        </v-col>
                                        <v-col cols="8">
                                            <p style="font-size: 13px;">15-30</p>
                                            <p style="font-size: 13px;">MM</p>
                                            <p style="font-size: 13px;">ALERT</p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                 <v-card style="height: 100px;">
                                    <v-row class="pa-4">
                                        <v-col cols="4" >
                                            <div class="icon">
                                                <img src="" alt="">
                                            </div>
                                        </v-col>
                                        <v-col cols="8">
                                            <p style="font-size: 13px;">30</p>
                                            <p style="font-size: 13px;">ABOVE</p>
                                            <p style="font-size: 13px;">EVACUATION</p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="3">
                                 <v-card style="height: 100px;">
                                    <v-row class="pa-4">
                                        <v-col cols="4" >
                                            <div class="icon">
                                                <img src="" alt="">
                                            </div>
                                        </v-col>
                                        <v-col cols="8">
                                            <p style="color: #64826E;">WATER LEVEL</p>
                                            <p style="font-size: 13px;">THRESHOLD</p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col  cols="12" sm="6" md="3">
                                 <v-card style="height: 100px;">
                                    <v-row class="pa-4">
                                        <v-col cols="4" >
                                            <div class="icon">
                                                <img src="" alt="">
                                            </div>
                                        </v-col>
                                        <v-col cols="8">
                                            <p style="font-size: 13px;">60%</p>
                                            <p style="font-size: 13px;">BANKFULL</p>
                                            <p style="font-size: 13px;">WARNING</p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                 <v-card style="height: 100px;">
                                    <v-row class="pa-4">
                                        <v-col cols="4" >
                                            <div class="icon">
                                                <img src="" alt="">
                                            </div>
                                        </v-col>
                                        <v-col cols="8">
                                            <p style="font-size: 13px;">80%</p>
                                            <p style="font-size: 13px;">BANKFULL</p>
                                            <p style="font-size: 13px;">ALERT</p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6" md="3">
                                 <v-card style="height: 100px;">
                                    <v-row class="pa-4">
                                        <v-col cols="4" >
                                            <div class="icon">
                                                <img src="" alt="">
                                            </div>
                                        </v-col>
                                        <v-col cols="8">
                                            <p style="font-size: 13px;">100%</p>
                                            <p style="font-size: 13px;">BANKFULL</p>
                                            <p style="font-size: 13px;">CRITICAL</p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                       
                    </v-sheet>
                </v-col>
</template>
<style scoped>

.icon{
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon img{
    border-radius: 99px;
    margin-left: 10px;
    min-width: 50px;
}
</style>