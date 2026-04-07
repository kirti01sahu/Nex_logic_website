import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../firebase/config';
import SEOHead from '../components/SEOHead';

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    degree: '',
    linkedin: '',
    github: '',
    resume: null,
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('posted_date', { ascending: false });
      
      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    // Scroll to form
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setFormData({ ...formData, resume: file });
    } else {
      alert('File size should not exceed 5MB');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    try {
      let resumeURL = '';
      
      // Upload resume to Supabase Storage
      if (formData.resume) {
        const fileExt = formData.resume.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('resume')
          .upload(fileName, formData.resume);

        if (uploadError) {
          console.error('Storage upload error:', uploadError);
          throw new Error(`Resume upload failed: ${uploadError.message}`);
        }

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('resume')
          .getPublicUrl(fileName);
        
        resumeURL = urlData.publicUrl;
      }

      // Save application to Supabase
      const { error } = await supabase
        .from('applications')
        .insert([{
          job_id: selectedJob.id,
          job_title: selectedJob.title,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          degree: formData.degree,
          linkedin: formData.linkedin,
          github: formData.github || null,
          resume_url: resumeURL,
          applied_date: new Date().toISOString(),
        }]);

      if (error) {
        console.error('Database insert error:', error);
        throw new Error(`Application submission failed: ${error.message}`);
      }

      setSuccessMessage('Application submitted successfully! We will get back to you soon.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        degree: '',
        linkedin: '',
        github: '',
        resume: null,
      });
      setShowApplicationForm(false);
      setSelectedJob(null);
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SEOHead
        title="Careers at Nextlogic Innovation Private Limited"
        description="Join Nextlogic Innovation Private Limited (naxlogic.com). Explore careers in AI, software engineering, consulting and more. Shape the future with us."
        canonical="/careers"
      />
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-cover bg-center flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        style={{ backgroundImage: `linear-gradient(rgba(47, 59, 53, 0.85) 0%, rgba(47, 59, 53, 0.9) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')` }}>
        <div className="container-custom px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white mb-6 leading-tight tracking-wide">
              Careers at Nextlogic
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join our team of innovators, creators, and problem-solvers. Build the future with Nextlogic Innovation Private Limited.
            </p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {successMessage && (
        <div className="container-custom px-4 md:px-6 py-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-600 dark:text-green-400 text-center">{successMessage}</p>
          </div>
        </div>
      )}

      {/* Why Work With Us */}
      <section className="py-16 md:py-24 bg-white dark:bg-charcoal">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
              Why Work With Us
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted leading-relaxed max-w-3xl mx-auto">
              We're building the future of technology, and we want you to be part of it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-taupe/20 dark:bg-charcoal-light p-8 rounded-xl">
              <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone mb-4 block">
                emoji_objects
              </span>
              <h3 className="text-xl font-heading text-charcoal dark:text-sandstone mb-3">
                Innovation First
              </h3>
              <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed">
                Work on cutting-edge projects with the latest technologies and contribute to meaningful innovations.
              </p>
            </div>

            <div className="bg-taupe/20 dark:bg-charcoal-light p-8 rounded-xl">
              <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone mb-4 block">
                diversity_3
              </span>
              <h3 className="text-xl font-heading text-charcoal dark:text-sandstone mb-3">
                Collaborative Culture
              </h3>
              <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed">
                Join a diverse team of experts who value collaboration, creativity, and continuous learning.
              </p>
            </div>

            <div className="bg-taupe/20 dark:bg-charcoal-light p-8 rounded-xl">
              <span className="material-symbols-outlined text-5xl text-charcoal dark:text-sandstone mb-4 block">
                trending_up
              </span>
              <h3 className="text-xl font-heading text-charcoal dark:text-sandstone mb-3">
                Growth Opportunities
              </h3>
              <p className="text-brown-grey dark:text-text-dark-muted leading-relaxed">
                We invest in our people with training, mentorship, and clear paths for career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-taupe/30 dark:bg-charcoal-light">
        <div className="container-custom px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-charcoal dark:text-sandstone mb-6">
              Open Positions
            </h2>
            <p className="text-lg md:text-xl text-brown-grey dark:text-text-dark-muted leading-relaxed">
              Explore our current job openings and find your perfect fit.
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.length === 0 ? (
              <div className="bg-white dark:bg-charcoal rounded-xl p-12 text-center">
                <span className="material-symbols-outlined text-6xl text-brown-grey dark:text-text-dark-muted mb-4 block">
                  work_off
                </span>
                <p className="text-lg text-brown-grey dark:text-text-dark-muted">
                  No open positions at the moment. Please check back later!
                </p>
              </div>
            ) : (
              jobs.map((job) => (
                <div key={job.id} className="bg-white dark:bg-charcoal rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-heading text-charcoal dark:text-sandstone mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-brown-grey dark:text-text-dark-muted">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-lg">business</span>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-lg">location_on</span>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-lg">schedule</span>
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-brown-grey dark:text-text-dark-muted mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {job.requirements && job.requirements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-charcoal dark:text-sandstone mb-2 uppercase tracking-wider">
                        Requirements:
                      </h4>
                      <ul className="space-y-1 text-sm text-brown-grey dark:text-text-dark-muted">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-base mt-0.5">check_circle</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={() => handleApply(job)}
                    className="bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-sm uppercase tracking-widest font-bold px-8 py-3 hover:opacity-90 transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {showApplicationForm && selectedJob && (
        <section id="application-form" className="py-16 md:py-24 bg-white dark:bg-charcoal">
          <div className="container-custom px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone mb-4">
                  Apply for {selectedJob.title}
                </h2>
                <p className="text-brown-grey dark:text-text-dark-muted">
                  Fill out the form below to submit your application.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-taupe/20 dark:bg-charcoal-light rounded-xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="number"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      required
                      min="0"
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      placeholder="5"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                      Highest Degree *
                    </label>
                    <input
                      type="text"
                      value={formData.degree}
                      onChange={(e) => setFormData({...formData, degree: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      placeholder="Bachelor's in Computer Science"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>

                  {selectedJob.include_github && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        value={formData.github}
                        onChange={(e) => setFormData({...formData, github: e.target.value})}
                        className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                        placeholder="https://github.com/johndoe"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                    Resume / CV * (PDF, DOC, DOCX - Max 5MB)
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-charcoal dark:file:bg-sandstone file:text-white dark:file:text-charcoal hover:file:opacity-90"
                  />
                  {formData.resume && (
                    <p className="mt-2 text-sm text-brown-grey dark:text-text-dark-muted">
                      Selected: {formData.resume.name}
                    </p>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-sm uppercase tracking-widest font-bold py-4 hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplicationForm(false);
                      setSelectedJob(null);
                    }}
                    className="px-8 border-2 border-charcoal dark:border-sandstone text-charcoal dark:text-sandstone text-sm uppercase tracking-widest font-bold py-4 hover:bg-charcoal/5 dark:hover:bg-sandstone/5 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Admin Access (Hidden) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => navigate('/admin-login')}
          className="w-12 h-12 rounded-full bg-charcoal/5 dark:bg-sandstone/5 hover:bg-charcoal/20 dark:hover:bg-sandstone/20 transition-all duration-300 flex items-center justify-center group"
          aria-label="Admin Access"
          title="Admin Login"
        >
          <span className="material-symbols-outlined text-xs text-charcoal/20 dark:text-sandstone/20 group-hover:text-charcoal/50 dark:group-hover:text-sandstone/50">
            admin_panel_settings
          </span>
        </button>
      </div>
    </div>
  );
};

export default CareersPage;
