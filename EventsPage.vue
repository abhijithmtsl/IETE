<template>
  <div id="app">
    <HeaderOne />
    <MainHeader />
    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" placeholder="Search events" v-model="searchQuery" />
      <button @click="findEvent">Find Event</button>
    </div>

    <!-- Event List -->
    <div class="event-list">
      <h2>Latest Past Events</h2>
      <div class="event" v-for="event in filteredEvents" :key="event.id">
        <div class="event-date">
          <p>NOV</p>
          <p class="day">04</p>
          <p>2023</p>
        </div>
        <div class="event-info">
          <p>{{ event.date }}</p>
          <h3>{{ event.title }}</h3>
          <p>{{ event.location }}</p>
          <p>{{ event.description }}</p>
        </div>
        <div class="event-image">
          <img :src="event.image" alt="Event Image" />
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="previousPage">Previous</button>
      <span>{{ currentPage }}</span>
      <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import MainHeader from './MainHeader.vue';
import MainFooter from './MainFooter.vue';
import HeaderOne from './HeaderOne.vue';
export default {
    components: {
        MainHeader,
        MainFooter,
        HeaderOne
    },
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 3,
      events: [
        {
          id: 1,
          date: 'November 04, 2023 @ 10:00 am - November 13, 2023 @ 5:00 pm',
          title: 'IETE 70th FOUNDATION DAY CELEBRATION - 2023',
          location: 'IETE Chennai, No. 37, Conran Smith Road, Gopalapuram, Chennai',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          image: require ('@/assets/Rectangle 112.png'),
        },
        {
          id: 2,
          date: 'November 05, 2023 @ 10:00 am - November 13, 2023 @ 5:00 pm',
          title: 'Tech Expo 2023',
          location: 'IETE Bangalore, No. 21, Silicon Valley Road',
          description: 'Maecenas tempus, tellus eget condimentum rhoncus...',
          image: require('@/assets/Rectangle 113.png'),
        },
        {
          id: 3,
          date: 'November 06, 2023 @ 10:00 am - November 13, 2023 @ 5:00 pm',
          title: 'Annual Science Symposium 2023',
          location: 'IETE Delhi, No. 45, Knowledge Park',
          description: 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem...',
          image: require('@/assets/Rectangle 114.png'),
        },
      ],
    };
  },
  computed: {
    filteredEvents() {
      // Filter events by search query
      const filtered = this.events.filter((event) =>
        event.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      // Paginate the filtered results
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return filtered.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.events.length / this.itemsPerPage);
    },
  },
  methods: {
    findEvent() {
      this.currentPage = 1; // Reset to the first page when search is triggered
    },
    previousPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  padding: 20px;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

input {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #ff6f61;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #ff3f31;
}

.event-list {
  margin-top: 20px;
}

h2 {
  margin-bottom: 20px;
}

.event {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}

.event-date {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ff6f61;
  margin-right: 20px;
}

.event-date .day {
  font-size: 40px;
}

.event-info {
  flex-grow: 1;
  margin-right: 20px;
}

.event-info h3 {
  color: #ff3f31;
}

.event-image img {
  width: 300px;
  height: 150px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #ff6f61;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 4px;
}

.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
