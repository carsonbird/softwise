<template>
  <div class="bg-gray-100 flex flex-col h-screen">
    <div class="md:fixed top-0 bg-white shadow-lg rounded-b-xl h-24 w-screen justify-center items-center flex">
      <g-image src="~/logo.png"/>
    </div>

    <div class="w-full flex-row md:w-5/6 md:max-w-2xl mx-auto my-auto border-2 rounded-lg overflow-hidden shadow-lg">
        <div class="relative z-20 bg-white rounded-t-lg shadow-lg border-b-2">
          <h1 class="text-center h-28 p-4 text-3xl text-blue-softwise font-bold">
            Please enter the following information
          </h1>
        </div>
        <div class="z-10 bg-white shadow-lg p-8">
          <div class="flex flex-col space-y-8">
            <form @submit.prevent="submit">
              <div class="flex flex-col space-y-3 mx-8 px-8">
                <div class="flex flex-col md:flex-row space-x-1 items-center">
                  <div class="md:w-2/5 text-right text-gray-400 text-lg">ssn (last 4) xxx-xx-</div>
                  <input v-model="ssn" placeholder="xxxx" type="text" class="md:w-3/5 bg-white border rounded px-3 py-1">
                </div>
                <div class="text-small text-center text-red-400">{{ errors.ssn }}</div>
                <div class="flex flex-col md:flex-row space-x-1 items-center">
                  <div class="md:w-2/5 text-right text-gray-400 text-lg">date of birth</div>
                  <input v-model="date" type="date" class="placeholder-gray-300 md:w-3/5 bg-white border rounded py-1 px-3">
                </div>
                <div class="text-small text-center text-red-400">{{ errors.date }}</div>
              </div>
              <div class="flex justify-end pt-4">
                <button class="disabled:bg-gray-300 rounded-full py-1 text-lg font-bold shadow-solid focus:shadow-none px-4 text-white bg-green-softwise modal-trigger">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
    </div>

    <div v-if="showModal" class="modal fixed inset-0 z-30 flex transition-opacity">
      <div class="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div class="transform transition-all w-full sm:w-5/6 sm:max-w-lg relative z-20 bg-white m-auto rounded-lg shadow flex flex-col overflow-hidden">
        <div class="bg-blue-500 px-4 py-2 border-b text-2xl font-bold text-white">Submission</div>
        <div class="p-4 flex flex-col space-y-4">
          <div><span class="font-bold">Last 4 SSN:&nbsp;</span><span>{{ ssn }}</span></div>
          <div><span class="font-bold">Date&nbsp;</span><span>{{ date }}</span></div>
        </div>
        <div class="bg-gray-50 p-3 flex justify-end">
          <button @click="reset" class="hover:bg-gray-700 focus:ring-2 focus:ring-gap-2 focus:outline-none focus:ring-gray-700 bg-gray-800 text-white px-4 py-2 border rounded-lg font-bold">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,

      ssn: '',
      date: '',

      valid: true,
      errors: {},
    }
  },
  methods: {
    reset: function() {
      this.showModal = false
    },
    submit: function() {
      this.valid = true
      this.errors = {}

      const validateSSN = ssn => {
        if (!ssn.length) {
          return { valid: false, error: "Last 4 of SSN is required" }
        }

        if (!ssn.match(/^[\d]{4}$/g)) {
          return { valid: false, error: "Please enter 4 numbers" }
        }

        return { valid: true, error: null }
      }

      const validateDate = date => {
        if (!date.length) {
          return { valid: false, error: "Date required" }
        }
        
        return { valid: true, error: null }
      }
    
      const validSSN = validateSSN(this.ssn)
      this.errors.ssn = validSSN.error
      if (this.valid) {
        this.valid = validSSN.valid
      }

      const validDate = validateDate(this.date)
      this.errors.date = validDate.error
      if (this.valid) {
        this.valid = validDate.valid
      }
      if (this.valid) {
        this.showModal = true
      }
    },
  }
}
</script>

<style scoped>
  body > * {
    font-family: Raleway;
  }
</style>