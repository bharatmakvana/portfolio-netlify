import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';

interface FormData {
  name: string;
  email: string;
  title: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  title?: string;
  message?: string;
}

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name) {
    errors.name = 'Name is required';
  } else if (data.name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }
  if (!data.title) {
    errors.title = 'Title is required';
  }
  if (!data.message) {
    errors.message = 'Message is required';
  }
  return errors;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', title: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const validateField = (name: string, value: string) => {
    const fieldErrors: FormErrors = {};
    
    if (name === 'name') {
      if (!value) {
        fieldErrors.name = 'Name is required';
      } else if (value.length < 3) {
        fieldErrors.name = 'Name must be at least 3 characters';
      }
    }
    
    if (name === 'email') {
      if (!value) {
        fieldErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        fieldErrors.email = 'Invalid email format';
      }
    }
    
    if (name === 'title' && !value) {
      fieldErrors.title = 'Title is required';
    }
    
    if (name === 'message' && !value) {
      fieldErrors.message = 'Message is required';
    }
    
    return fieldErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (isSubmitted) {
      const fieldErrors = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Only send email if validation passes
      if (form.current) {
        emailjs
          .sendForm('service_fvj345p', 'template_q8qeygs', form.current, {
            publicKey: 'ff8pK2ZOL_XCtTs_8',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Form submitted successfully!');
              setFormData({ name: '', email: '', title: '', message: '' });
              setErrors({});
              setIsSubmitted(false);
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Failed to send message. Please try again.');
            },
          );
      }
    }
  };

  return (
    <section className='content-section'>
        <Container>
            <Row>
              <Col md={6}>
                <h2 className='contact-title mb-3'>Connect with me</h2>
                <form ref={form} action="" onSubmit={handleSubmit} noValidate className='mb-5 mb-md-0'>
                  <div className="form-group mb-4">
                    <label htmlFor="name" className='form-label visually-hidden'>Name</label>
                    <input 
                      name="name" 
                      type="text" 
                      className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`} 
                      id="name" 
                      placeholder="Your Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                    {errors.name && <span className='invalid-feedback d-block'>{errors.name}</span>}
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="email" className='form-label visually-hidden'>Email</label>
                    <input 
                      name="email" 
                      type="email" 
                      className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`} 
                      id="email" 
                      placeholder="Your Email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required
                    />
                    {errors.email && <span className='invalid-feedback d-block'>{errors.email}</span>}
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="title" className='form-label visually-hidden'>Subject</label>
                    <input 
                      name="title" 
                      type="text" 
                      className={`form-control form-control-lg ${errors.title ? 'is-invalid' : ''}`} 
                      id="title" 
                      placeholder="Subject" 
                      value={formData.title} 
                      onChange={handleChange} 
                      required
                    />
                    {errors.title && <span className='invalid-feedback d-block'>{errors.title}</span>}
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="message" className='form-label visually-hidden'>Message</label>
                    <textarea 
                      name="message" 
                      className={`form-control form-control-lg ${errors.message ? 'is-invalid' : ''}`} 
                      id="message" 
                      placeholder="Message" 
                      rows={5} 
                      cols={30} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required
                    />
                    {errors.message && <span className='invalid-feedback d-block'>{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </Col>
              <Col md={6}>
                <h2 className='contact-title mb-3'>Contact Me</h2>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact;