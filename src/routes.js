import Tesrouter from './components/Help.vue';
import Help from './components/Help';
import Landingpage from './layouts/Landingpage';
import Businesshealth from './layouts/Businesshealth';
import Businesshealthscreening from './layouts/Businesshealthscreening';
import Finalresultone from './components/businesshealth/Finalresultone';
import Finalresulttwo from './components/businesshealth/Finalresulttwo';
import Finalresultthree from './components/businesshealth/Finalresultthree';

import agribusiness from './components/industries/agribusiness';
import manufacture from './components/industries/manufacture';
import customerproduct from './components/industries/customer-products';
import financialservices from './components/industries/financial-services';
import forestproductpaperandpacking from './components/industries/forest-product-paper-and-packing';

import Howwehelp from './layouts/Howwehelp';
import About from './layouts/About';
import Insights from './layouts/Insights';
import Insightone from './components/insight/Insightone';
import Careers from './layouts/Careers';
import Careersatu from './components/career/Careersatu';
import Applycareersatu from './components/career/Applycareersatu';
import businessresultVue from './components/businesshealth/businessresult.vue';

import infrastructureAndConstructionVue from './components/industries/infrastructure-and-construction.vue';
import mediaAndEntertainmentVue from './components/industries/media-and-entertainment.vue';
import energyAndMiningVue from './components/industries/energy-and-mining.vue';
import retail from './components/industries/retail.vue';
import technologyAndTelecomunicationsVue from './components/industries/technology-and-telecomunications.vue';
import transportAndLogisticsVue from './components/industries/transport-and-logistics.vue';
import renewableenergy from './components/industries/renewable-energy.vue';
import chemicalIndustryVue from './components/industries/chemical-industry.vue';
import healthVue from './components/industries/health.vue';


import businessProcessAssessmentVue from './components/howwehelp/business-process-assessment.vue';
import businessExcellenceVue from './components/howwehelp/business-excellence.vue';
import marketingAssessmentVue from './components/howwehelp/marketing-assessment.vue';
import technologyBasedSolutionVue from './components/howwehelp/technology-based-solution.vue';
import marketingSolutionVue from './components/howwehelp/marketing-solution.vue';
import mergerAndAcquisitionVue from './components/howwehelp/merger-and-acquisition.vue';
import associatePartnershipVue from './components/howwehelp/associate-partnership.vue';
import formresultVue from './components/businesshealth/formresult.vue';

export default [
    {
        path: '/',
        component:Landingpage,
        name: 'landingpage'
    },
    {
        path: '/businesshealth',
        component: Businesshealth,
        name: 'businesshealth',
        children: [
            {
                path: 'tesrouter',
                component:Tesrouter,
                name: 'tesrouter'
            },
            {
                path: 'help',
                component: Help,
                name: 'help',
            }
        ]
    },
    {
        path: '/businesshealthscreening',
        component:Businesshealthscreening,
        name: 'businesshealthscreening'
    },
    {
        path: '/businesshealth/finalresultone',
        component:Finalresultone,
        name: 'finalresultone'
    },
    {
        path: '/businesshealth/finalresulttwo',
        component:Finalresulttwo,
        name: 'finalresulttwo'
    },
    {
        path: '/businesshealth/finalresultthree',
        component:Finalresultthree,
        name: 'finalresultthree'
    },
    {
        path: '/businesshealth/businessresult/:id',
        component:businessresultVue,
        name: 'businessresult'
    },{
        path: '/businesshealth/formresult',
        component:formresultVue,
        name: 'formresult'
    },
    {
        path: '/industries/agribusiness',
        component:agribusiness,
        name: 'agribusiness'
    },
    {
        path: '/industries/manufacture',
        component:manufacture,
        name: 'manufacture'
    },
    {
        path: '/industries/customer-products',
        component:customerproduct,
        name: 'customer-product'
    },{
        path: '/industries/financial-services',
        component:financialservices,
        name: 'financial-services'
    },
    {
        path: '/industries/forest-product-paper-and-packing',
        component:forestproductpaperandpacking,
        name: 'forest-product-paper-and-packing'
    },{
        path: '/industries/infrastructure-and-construction',
        component: infrastructureAndConstructionVue,
        name: 'infrastructure-and-construction'
    },{
        path: '/industries/media-and-entertainment',
        component: mediaAndEntertainmentVue,
        name: 'media-and-entertainment'
    },{
        path: '/industries/energy-and-mining',
        component: energyAndMiningVue,
        name: 'energy-and-mining'
    },{
        path: '/industries/retail',
        component: retail,
        name: 'retail'
    },{
        path: '/industries/technology-and-telecomunications',
        component: technologyAndTelecomunicationsVue,
        name: 'technology-and-telecomunications'
    },{
        path: '/industries/transportation-and-logistic',
        component: transportAndLogisticsVue,
        name: 'transport-and-logistics'
    },{
        path: '/industries/renewable-energy',
        component: renewableenergy,
        name: 'renewable-energy'
    },{
        path: '/industries/chemical-industry',
        component: chemicalIndustryVue,
        name: 'chemical-industry'
    },{
        path: '/industries/health',
        component: healthVue,
        name: 'health'
    },
    
    {
        path: '/Howwehelp',
        component:Howwehelp,
        name: 'howwehelp'
    },{
        path: '/Howwehelpsatu/business-process-assessment',
        component: businessProcessAssessmentVue,
        name: 'business-process-assessment'
    },{
        path: '/Howwehelpsatu/business-excellence',
        component: businessExcellenceVue,
        name: 'business-excellence'
    },{
        path: '/Howwehelpsatu/marketing-assessment',
        component: marketingAssessmentVue,
        name: 'marketing-assessment'
    },{
        path: '/Howwehelpsatu/technology-based-solution',
        component: technologyBasedSolutionVue,
        name: 'technology-based-solution'
    },{
        path: '/Howwehelpsatu/marketing-solution',
        component: marketingSolutionVue,
        name: 'marketing-solution'
    },{
        path: '/Howwehelpsatu/merger-and-acquisition',
        component: mergerAndAcquisitionVue,
        name: 'merger-and-acquisition'
    },{
        path: '/Howwehelpsatu/associate-partnership',
        component: associatePartnershipVue,
        name: 'associate-partnership'
    },
    {
        path: '/About',
        component:About,
        name: 'about'
    },
    {
        path: '/Insights',
        component:Insights,
        name: 'insight'
    },
    {
        path: '/insights/insightone/:id',
        component:Insightone,
        name: 'insightone'
    },
    {
        path: '/Careers',
        component:Careers,
        name: 'careers'
    },
    {
        path: '/Careers/careersatu',
        component:Careersatu,
        name: 'careerssatu'
    },
    {
        path: '/Careers/applycareersatu',
        component:Applycareersatu,
        name: 'applycareerssatu'
    },
];

