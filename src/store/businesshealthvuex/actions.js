import axios from 'axios';

export default {
  async savePayload({ commit }, item) {
    try {
      console.log('itemnyaaaaa', item)
      const response = await axios.post('https://admin.skaleupbusiness.com/analisa/add', {
        name: item.name,
        b_time: item.year_of_business,
        p_time: item.business_industries,
        m_time: item.is_owner,
        q1: item.screening.sistem_dan_proses,
        q2: item.screening.performa_karyawan,
        q3: item.screening.performa_finansial,
        q4: item.screening.billing_invoicing_dan_debitur,
        q5: item.screening.cash_flow,
        q6: item.screening.creditor_payment,
        q7: item.screening.work_in_progress,
        q8: item.screening.project_management,
        q9: item.screening.quality,
        q10: item.screening.client_servicing,
        q11: item.screening.organization_and_scheduling,
        q12: item.screening.risk_management,
        q13:item.screening.staff_culture,
        q14: item.screening.sustainability_and_reward,
        q15: item.screening.business_planning,
        q16: item.screening.growth_and_balance,
        no_wa: item.phone,
        email: item.email

      })

      console.log('ini response', response);
      console.log('scorenya adalah : '+ response.data.score);
      commit('response', response.data.score); 
      return response.data.score;
    } catch(e) {
      console.log(e)
    }
  },
}

// http://localhost:3000/apibusinesshealth

// http://192.168.196.30:8880/public/user-business
