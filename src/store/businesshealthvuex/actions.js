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
      commit('setscore', response.score); 
      var no_hp = item.phone;
      var format = '62';
      var hilang_satu_angka = no_hp.substring(1);
      var no_hp_baru = format + hilang_satu_angka;
     
      location.href = 'https://wa.me/' + no_hp_baru + '?text=Halo%20' + item.name + '%20Sekarang%20kami%20mendapatkan%20hasil%20analisa%20anda%20dengan%20skor%20' + response.score;
      

      
      // alert(' https://api.whatsapp.com/send?phone=6281380399188&text=Saya%20tertarik%20untuk%20membeli%20produk%20ini%20segera.');


      return response.score;
    } catch(e) {
      console.log(e)
    }
  },
}

// http://localhost:3000/apibusinesshealth

// http://192.168.196.30:8880/public/user-business
