<template>
  <div id="app">
    <HeaderOne />
    <MainHeader />
    <!-- Header with Search Bar -->
    <header class="header">
      <h1>IETE Course</h1>
      <div class="search-bar">
        <input type="text" placeholder="Search" v-model="searchQuery" />
        <button @click="searchCourses"><i class="fas fa-search"></i></button>
      </div>
    </header>

    <!-- Course List -->
    <div class="course-list">
      <div class="course-card" v-for="course in paginatedCourses" :key="course.id">
        <img :src="course.image" alt="Course Image" class="course-image" />
        <div class="course-details">
          <div class="course-badge">{{ course.category }}</div>
          <h2>{{ course.title }}</h2>
          <div class="course-info">
            <span>{{ course.duration }}</span>
            <span>{{ course.level }}</span>
            <span>{{ course.lessons }} lessons</span>
            <span>{{ course.students }} students</span>
          </div>
          <p>{{ course.description }}</p>
          <div class="course-price">{{ course.price }}</div>
          <button class="view-more">View More</button>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import HeaderOne from './HeaderOne.vue';
import MainFooter from './MainFooter.vue';
import MainHeader from './MainHeader.vue';
export default {
    components: {
        HeaderOne,
        MainHeader,
        MainFooter
    },
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 3,
      courses: [
        {
          id: 1,
          title: 'Embedded Systems Design (Practical Oriented Training)',
          category: 'Design',
          duration: '10 Weeks',
          level: 'Advanced Level',
          lessons: 10,
          students: 40,
          description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          price: '₹ 15,999',
          image: require("@/assets/Rectangle 87.png"),
        },
        {
          id: 2,
          title: 'Cyber Security',
          category: 'Development',
          duration: '8 Weeks',
          level: 'Advanced Level',
          lessons: 12,
          students: 40,
          description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          price: '₹ 10,999',
          image: require("@/assets/Rectangle 90.png"),
        },
        {
          id: 3,
          title: 'AI and ML with Python',
          category: 'Design',
          duration: '8 Days',
          level: 'Advanced Level',
          lessons: 12,
          students: 40,
          description: 'This AI and ML course focusses on the basic concepts of AI and ML. Topics related to supervised learning, unsupervised learning, linear regression, etc. will be covered.',
          price: '₹ 5,999',
          image: require("@/assets/Rectangle 93.png"),
        },
      ],
    };
  },
  computed: {
    filteredCourses() {
      if (this.searchQuery) {
        return this.courses.filter(course => 
          course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.courses;
    },
    paginatedCourses() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredCourses.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
    },
  },
  methods: {
    searchCourses() {
      this.currentPage = 1; // Reset to the first page after search
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style>
/* Basic styles for the app */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.search-bar input {
  padding: 10px;
  width: 200px;
  border-radius: 5px;
}

.search-bar button {
  padding: 10px;
  background-color: #ff6f61;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}

.search-bar button:hover {
  background-color: #ff8b79;
}

.course-list {
  margin-top: 20px;
}

.course-card {
  display: flex;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.course-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 10px;
}

.course-details {
  flex-grow: 1;
}

.course-badge {
  background-color: #ff6f61;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 10px;
}

.course-info {
  margin: 10px 0;
  font-size: 14px;
}

.course-price {
  font-size: 18px;
  font-weight: bold;
  color: #ff6f61;
}

.view-more {
  padding: 10px;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.view-more:hover {
  background-color: #ff8b79;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
}

button:disabled {
  background-color: #ccc;
}
</style>
