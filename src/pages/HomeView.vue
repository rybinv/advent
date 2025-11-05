<template>
    <Quiz v-if="isQuizOpen" @close="isQuizOpen = false" :quiz_id="quizId"/>
    <RepeatModal v-if="isRepeatOpen" @close="isRepeatOpen = false" :event_id="getUUID('CLTenterprise')" />
    <IcecreamModal v-if="isIcecreamOpen" @close="isIcecreamOpen = false" @quiz="openEventModal('icecreamCategory')" />
    <SuperClearModal v-if="isSuperClearOpen" @close="isSuperClearOpen = false" @quiz="openEventModal('superClean')" />
    <DifferencesModal v-if="isDifferencesOpen" @close="isDifferencesOpen = false" @quiz="openEventModal('findDifferences')" />
    <AbbreviationsModal v-if="isAbbreviationsOpen" @close="isAbbreviationsOpen = false" @quiz="openEventModal('decodeAbbreviations')" :event_id="getUUID('decodeAbbreviations')" />
    <RexonaModal v-if="isRexonaOpen" @close="isRexonaOpen = false" @quiz="openEventModal('rexonaEvent')" />
    <ClearLineModal v-if="isClearLineOpen" @close="isClearLineOpen = false" @quiz="openEventModal('clearLineEvent')" />
    <TreeModal v-if="isTreeOpen" @close="isTreeOpen = false" @quiz="openEventModal('wishTree')" />
    <CrosswordModal v-if="isCrosswordOpen" @close="isCrosswordOpen = false" @quiz="openEventModal('ufsCrossword')" />
    <HouseModal v-if="isHouseOpen" @close="isHouseOpen = false" @quiz="openEventModal('friendlyHouse')" />
    <UnishopModal v-if="isUnishopOpen" @close="isUnishopOpen = false" @quiz="openEventModal('unishopEvent')" />
    <RepeatDotRuModal v-if="isRepeatRuOpen" @close="isRepeatRuOpen = false" @quiz="openEventModal('repeatRuEvent')" />
    <VelvetHandsModal v-if="isvelvetHandsOpen" @close="isvelvetHandsOpen = false" @quiz="openEventModal('velvetHands')" />
    <UfsFactModal v-if="isUfsFactOpen" @close="isUfsFactOpen = false" @quiz="openEventModal('ufsFact')" :event_id="getUUID('ufsFact')" />
    <CTLMissionModal v-if="isCltMissionOpen" @close="isCltMissionOpen = false" @quiz="openEventModal('cltMission')" :event_id="getUUID('cltMission')" />
    <SmoothieModal v-if="isSmoothieOpen" @close="isSmoothieOpen = false" @quiz="openEventModal('smoothieCookingClass')" />
    <AromatModal v-if="isAromatOpen" @close="isAromatOpen = false" @quiz="openEventModal('aromaDiffuserMaking')" />
    <CookingModal v-if="isCookingOpen" @close="isCookingOpen = false" @quiz="openEventModal('culinaryMasterClass')" />
    <DiversityModal v-if="isDiversityOpen" @close="isDiversityOpen = false" @quiz="openEventModal('equalityDiversityInclusion')" :event_id="getUUID('equalityDiversityInclusion')" />
    <DomestosModal v-if="isDomestosOpen" @close="isDomestosOpen = false" @quiz="openEventModal('domestosSchoolProgramFact')" />
    <AxeModal v-if="isAxeOpen" @close="isAxeOpen = false" @quiz="openEventModal('axeEvent')" :event_id="getUUID('axeEvent')" />
    <CocktailModal v-if="isCocktailOpen" @close="isCocktailOpen = false" @quiz="openEventModal('icecreamCocktailDecoration')" />
    <GrassDollModal v-if="isGrassDollOpen" @close="isGrassDollOpen = false" @quiz="openEventModal('grassDollCrafting')" />
    <PaperCraftingModal v-if="isPaperOpen" @close="isPaperOpen = false" @quiz="openEventModal('paperCraftingClass')" />
    <SoapModal v-if="isSoapOpen" @close="isSoapOpen = false" @quiz="openEventModal('soapArtClass')" />
    <CLTEnterpriseModal v-if="isEnterpriseOpen" @close="isEnterpriseOpen = false" @quiz="openEventModal('CLTenterprise')" :event_id="getUUID('CLTenterprise')" />
    <MagnatModal v-if="isMagnatOpen" @close="isMagnatOpen = false" />
    <LearningModal v-if="isLearningOpen" @close="isLearningOpen = false"  :event_id="getUUID('learningEvent')"/>
    <UproModal v-if="isUproOpen" @close="isUproOpen = false" @quiz="openEventModal('Upro')"/>
    <tShirtModal v-if="isTShirtOpen" @close="isTShirtOpen = false" />
    <GratzModal v-if="isGratzOpen" @close="isGratzOpen = false" @quiz="openEventModal('gratzEvent')" :event_id="getUUID('gratzEvent')"/>
    <tShirtModal v-if="isTShirtOpen" @close="isTShirtOpen = false" />
    <PriznanieModal v-if="isPriznanieOpen" @close="isPriznanieOpen = false" :event_id="getUUID('priznanie')"/>
    <!-- Гирлянда 1 -->

    <div class="garland">
        <GarlandComponent :number="1" class="g-1" />
    </div>

    <div class="calendar central-block">

        <div class="calendar-content flex flex-col">
            <div class="hello-text m-10">   
                <h1 class="mb-2">Дорогие друзья, добро пожаловать в адвент-календарь "Юнилевер Русь"!</h1>
                <h2 style="color: #0a2052;">В течение 4х дней вам будет открываться по 8 окошек с разнообразными сюрпризами — квизами, полезной информацией, кроссвордами и видео. Мы уверены, что получится найти для себя что-то интересное и увлекательное!</h2>
            </div>
            <div class="flex">
                <div class="flex flex-col md:flex-row items-center justify-center">
                    <div class="date">17 Июня</div>
                    <div class="day">
                        <div class="event" @click="isTreeOpen = true">1<br>Дерево желаний</div>
                        <div class="event" @click="isvelvetHandsOpen = true">2<br>Бархатные ручки</div>
                        <div class="event" @click="isIcecreamOpen = true">3<br>Категория Мороженое</div>
                        <div class="event" @click="isSuperClearOpen = true">4<br>Суперчисто.рф</div>
                        <!-- <div class="event" @click="isCrosswordOpen = true" >5<br>Кроссворд от UFS</div> -->
                        <div class="event" @click="crosswordReroute()">5<br>Кроссворд от UFS</div>
                        <div class="event" @click="isEnterpriseOpen = true">6<br>CLT предпринима-тельство</div>
                        <div class="event" @click="isDifferencesOpen = true">7<br>Найди отличия</div>
                        <div class="event" @click="isRepeatOpen = true">8<br>Вы уже знакомы с Repeat?</div>
                    </div>
                </div>
                <img class="hidden md:block" src="@/assets/32.svg" />
            </div>
        </div>
    </div>  
        <!-- Гирлянда 2 -->
        <div class="garland">
            <GarlandComponent :number="2" class="g-2 md:h-96 sm:h-48" />
        </div>

        <div class="calendar central-block">
            <div class="calendar-content flex flex-col items-start md:items-end">
                <div class="flex flex-col md:flex-row items-center justify-center">
                <div class="date">18 Июня</div>
                <div class="day">
                    <div class="event" @click="isUfsFactOpen = true">9<br>Факт о UFS</div>
                    <div class="event" @click="isAbbreviationsOpen = true">10<br>Расшифруй аббревиатуры</div>
                    <div class="event" @click="isDiversityOpen = true">11<br>Равенство, разнообразие и инклюзия</div>
                    <div class="event" @click="isRexonaOpen = true">12<br>Rexona</div>
                    <div class="event" @click="isClearLineOpen = true">13<br>Чистая Линия</div>
                    <div class="event" @click="isAxeOpen = true">14<br>Аxe</div>
                    <div class="event" @click="isMagnatOpen = true">15<br>Магнат бар</div>
                    <div class="event" @click="isLearningOpen = true">16<br>Обучение</div>
                </div>
            </div>
            </div>
        </div>
        
        <!-- Гирлянда 3 -->
        <div class="garland">
            <GarlandComponent :number="3" class="g-3" />
        </div>
        <div class="calendar central-block">
            <div class="calendar-content flex flex-col items-start">
                <div class="flex flex-col md:flex-row items-center justify-center">
                <div class="date">19 Июня</div>
                <div class="day">
                    <div class="event" @click="isTShirtOpen = true">17<br>Мастер-класс по росписи футболок</div>
                    <div class="event" @click="isSmoothieOpen = true">18<br>Мастер-класс по приго-товлению смузи</div>
                    <div class="event" @click="isAromatOpen = true">19<br>Мастер-класс по созданию аромата для дома</div>
                    <div class="event" @click="isCookingOpen = true">20<br>Кулинарный мастер-класс</div>
                    <div class="event" @click="isPaperOpen = true">21<br>Мастер-класс по изготовлению бумаги</div>
                    <div class="event" @click="isSoapOpen = true">22<br>Мастер-класс по созданию мыльных картин</div>
                    <div class="event" @click="isGrassDollOpen = true">23<br>Мастер-класс по изготовлению травянчиков</div>
                    <div class="event" @click="isGratzOpen = true">24<br>Видео-<br>поздравление</div>
                </div>
            </div>
            </div>
        </div>
        
        <!-- Гирлянда 4 -->
        <div class="garland">
            <GarlandComponent :number="4" class="g-4" />
        </div>

        <div class="calendar central-block mb-20">
            <div class="calendar-content flex flex-col items-start md:items-end">
                <div class="flex flex-col md:flex-row items-center justify-center">
                <div class="date">20 Июня</div>
                <div class="day">
                    <div class="event" @click="isCocktailOpen = true">25<br>Мастер-класс по украшению коктейлей с мороженым</div>
                    <div class="event" @click="isUproOpen = true">26<br>U-pro</div>
                    <div class="event" @click="isRepeatRuOpen = true">27<br>Repeat.ru</div>
                    <div class="event" @click="isPriznanieOpen = true">28<br>Культура признания</div>
                    <div class="event" @click="isDomestosOpen = true">29<br>Школьная программа Domestos</div>
                    <div class="event" @click="isCltMissionOpen = true">30<br>CLT миссия</div>
                    <div class="event" @click="isUnishopOpen = true">31<br>Unishop</div>
                    <div class="event" @click="isHouseOpen = true">32<br>Дружный дом</div>
                </div>
            </div>
            </div>
            
        </div>
</template>

<script setup lang="ts">
import GarlandComponent from "@/components/quiz/GarlandComponent.vue"
import { useRouter } from 'vue-router';
import Quiz from "@/components/Quiz.vue";
import { ref } from 'vue';

const quizId = ref('');
const isQuizOpen = ref(false);

const router = useRouter();
function crosswordReroute() {
    router.push("/crossword");
}


// events clicks
import eventsIds from "@/components/home/events.ts";
import RepeatModal from "@/components/home/RepeatModal.vue";
import IcecreamModal from "@/components/home/IcecreamModal.vue";
import SuperClearModal from "@/components/home/SuperClearModal.vue";
import DifferencesModal from "@/components/home/DifferencesModal.vue";
import AbbreviationsModal from "@/components/home/AbbreviationsModal.vue";
import RexonaModal from "@/components/home/RexonaModal.vue";
import ClearLineModal from "@/components/home/ClearLineModal.vue";
import TreeModal from "@/components/home/TreeModal.vue";
import CrosswordModal from "@/components/home/CrosswordModal.vue";
import HouseModal from "@/components/home/HouseModal.vue";
import UnishopModal from "@/components/home/UnishopModal.vue";
import RepeatDotRuModal from "@/components/home/RepeatDotRuModal.vue";
import VelvetHandsModal from "@/components/home/VelvetHandsModal.vue";
import UfsFactModal from "@/components/home/UfsFactModal.vue";
import CTLMissionModal from "@/components/home/CTLMissionModal.vue";
import SmoothieModal from "@/components/home/SmoothieModal.vue";
import AromatModal from "@/components/home/AromatModal.vue";
import CookingModal from "./../components/home/CookingModal.vue";
import DiversityModal from "@/components/home/DiversityModal.vue";
import DomestosModal from "@/components/home/DomestosModal.vue";
import AxeModal from "@/components/home/AxeModal.vue";
import CocktailModal from "@/components/home/CocktailModal.vue";
import GrassDollModal from "@/components/home/GrassDollModal.vue";
import PaperCraftingModal from "@/components/home/PaperCraftingModal.vue";
import SoapModal from "@/components/home/SoapModal.vue";
import CLTEnterpriseModal from "./../components/home/CLTEnterpriseModal.vue";
import MagnatModal from "./../components/home/MagnatModal.vue";
import LearningModal from "./../components/home/LearningModal.vue";
import UproModal from "./../components/home/UproModal.vue";
import tShirtModal from "./../components/home/tShirtModal.vue";
import GratzModal from "./../components/home/GratzModal.vue";
import PriznanieModal from "@/components/home/PriznanieModal.vue";



const isPriznanieOpen = ref(false);
const isGratzOpen = ref(false);
const isTShirtOpen = ref(false);
const isUproOpen = ref(false);
const isLearningOpen = ref(false);
const isMagnatOpen = ref(false);
const isEnterpriseOpen = ref(false);
const isSoapOpen = ref(false);
const isPaperOpen = ref(false);
const isGrassDollOpen = ref(false);
const isCocktailOpen = ref(false);
const isAxeOpen = ref(false);
const isDomestosOpen = ref(false);
const isDiversityOpen = ref(false);
const isCookingOpen = ref(false);
const isAromatOpen = ref(false);
const isSmoothieOpen = ref(false);
const isCltMissionOpen = ref(false);
const isUfsFactOpen = ref(false);
const isvelvetHandsOpen = ref(false);
const isRepeatRuOpen = ref(false);
const isUnishopOpen = ref(false);
const isHouseOpen = ref(false);
const isCrosswordOpen = ref(false);
const isTreeOpen = ref(false);
const isClearLineOpen = ref(false);
const isRexonaOpen = ref(false);
const isAbbreviationsOpen = ref(false);
const isDifferencesOpen = ref(false);
const isIcecreamOpen = ref(false);
const isSuperClearOpen = ref(false);
const isRepeatOpen = ref(false);


const showModal = () => {
    isQuizOpen.value = true;
};

function getUUID(eventName: keyof typeof eventsIds) {
    return eventsIds[eventName];
}

function openEventModal(eventName: keyof typeof eventsIds) {
  quizId.value = getUUID(eventName);
  showModal();
}

</script>

<style scoped lang="scss">
body {
    font-family: Arial, sans-serif;
    background: url('path/to/your/background-image.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
}

// .container {
//     width: 100vw;
// }

header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    margin: 0;
    font-size: 24px;
}

header p {
    margin: 5px 0;
    color: #666;
}

// .garland {
//     width: 100%;
// }

// .calendar {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
// }


.day {
    width: 900px;
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    column-gap: 1.25rem;
}
@media (max-width: 770px) {
    .day {
        gap: 0rem;
        column-gap: 0rem;
        width: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Создает две колонки с одинаковой шириной */
        grid-gap: 10px;        
    }
   
}
.date {
    z-index: 0;
    font-size: 34px;
    font-weight: 800;
    color: #0a2052;
    height: 20px;
    margin-bottom: 20px;
    width: 160px;
}
@media (min-width: 770px) {
    .date {
        transform: rotate(-90deg);
    }
}
@media (max-width: 450px) {
    .date {
        width: 100px;
        margin-bottom: 20px;
        font-size: 18px;
    }
}
.event {
    cursor: pointer;
    gap: 1.25rem;
    column-gap: 1.25rem;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    background: radial-gradient(100% 118.57% at 100% 0%, #5CA4B4 0%, #135AC5 100%);
    color: #fff;
    width: 196px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
    height: 180px; /* Ensure square shape */
}
@media (max-width: 450px) {
    .event {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        height: 140px;
        width: 155px;
    }
}

.event:hover {
    background: radial-gradient(100% 118.57% at 100% 0%, #79b3c4 0%, #457dd0 100%);
}
.disabled {
    background: radial-gradient(100% 118.57% at 100% 0%, #B1C4C8 0%, #7593C1 100%);
    pointer-events: none;
}
.disabled:hover {
    background: radial-gradient(100% 118.57% at 100% 0%, #8c9b9f 0%, #5f779b 100%);
}

footer {
    text-align: center;
    margin-top: 20px;
    color: #666;
}

footer p {
    margin: 5px 0;
}

.central-block {
    display: flex;
}
@media (min-width: 450px) {
    .central-block { 
        justify-content: center;
        align-items: center;
    }
}

.calendar-content {
    display: flex;
    width: 80vw;
}
@media (max-width: 770px) {
    .calendar-content {
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
}

.hello-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
}
@media (max-width: 450px) {
    .hello-text {
        width: 90%;
    }
}
</style>
