/**
 * PRODVESTOR WEBSITE - API Utilities
 * FILE LOCATION: src/utils/api.js
 */

import { API_ENDPOINTS } from './constants';

/**
 * API client class
 */
class APIClient {
  constructor(baseURL = API_ENDPOINTS.BASE_URL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json'
    };
  }

  /**
   * Make API request
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      }
    };

    try {
      const response = await fetch(url, config);
      
      // Handle different response types
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return { data, status: response.status, headers: response.headers };
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  /**
   * GET request
   */
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    
    return this.request(url, { method: 'GET' });
  }

  /**
   * POST request
   */
  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  /**
   * PUT request
   */
  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  /**
   * PATCH request
   */
  async patch(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  }

  /**
   * DELETE request
   */
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  /**
   * Upload file
   */
  async upload(endpoint, file, additionalData = {}) {
    const formData = new FormData();
    formData.append('file', file);
    
    Object.keys(additionalData).forEach(key => {
      formData.append(key, additionalData[key]);
    });

    return this.request(endpoint, {
      method: 'POST',
      body: formData,
      headers: {} // Let browser set Content-Type for FormData
    });
  }
}

// Create API client instance
const api = new APIClient();

/**
 * Contact form submission
 */
export async function submitContactForm(formData) {
  return api.post(API_ENDPOINTS.CONTACT, formData);
}

/**
 * Newsletter subscription
 */
export async function subscribeToNewsletter(email) {
  return api.post(API_ENDPOINTS.NEWSLETTER, { email });
}

/**
 * Fetch projects
 */
export async function getProjects(filters = {}) {
  return api.get(API_ENDPOINTS.PROJECTS, filters);
}

/**
 * Fetch single project
 */
export async function getProject(id) {
  return api.get(`${API_ENDPOINTS.PROJECTS}/${id}`);
}

/**
 * Fetch blog posts
 */
export async function getBlogPosts(filters = {}) {
  return api.get(API_ENDPOINTS.BLOG, filters);
}

/**
 * Fetch single blog post
 */
export async function getBlogPost(slug) {
  return api.get(`${API_ENDPOINTS.BLOG}/${slug}`);
}

/**
 * Fetch team members
 */
export async function getTeamMembers() {
  return api.get(API_ENDPOINTS.TEAM);
}

/**
 * Submit job application
 */
export async function submitJobApplication(formData, resume) {
  return api.upload(`${API_ENDPOINTS.BASE_URL}/api/careers/apply`, resume, formData);
}

// Export API client and methods
export { api };

export default {
  api,
  submitContactForm,
  subscribeToNewsletter,
  getProjects,
  getProject,
  getBlogPosts,
  getBlogPost,
  getTeamMembers,
  submitJobApplication
};