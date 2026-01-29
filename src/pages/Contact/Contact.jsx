// ContactPage.jsx
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  XCircle,
  Building,
  Users,
  MessageSquare,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Visit Our Office",
      details: [
        "PLOT NO -380/09, 657/B/380",
        "PADMAVISHWA CENTER, OLD PANDIT COLONY",
        "NASHIK - 422002",
      ],
      color: "bg-gradient-to-br from-orange-500 to-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Call Us",
      details: ["+91 98905 33709", "+91 97634 04340"],
      color: "bg-gradient-to-br from-orange-500 to-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      title: "Email Us",
      details: ["connect@kabraemporium.com"],
      color: "bg-gradient-to-br from-orange-500 to-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: "Working Hours",
      details: ["Mon-Sun: 10:00 AM - 8:00 PM"],
      color: "bg-gradient-to-br from-orange-500 to-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  const stats = [
    { icon: <Building />, value: "12+", label: "Years Experience" },
    { icon: <Users />, value: "5000+", label: "Happy Clients" },
    { icon: <MessageSquare />, value: "24/7", label: "Support" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-3xl -z-10" />
          <h1 className="text-5xl md:text-4xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? We're here to help. Reach out to
            us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full mr-3"></div>
                Contact Information
              </h2>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bgColor} rounded-2xl p-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                  >
                    <div className="flex items-start space-x-5">
                      <div
                        className={`p-1 rounded-2xl text-white ${item.color} shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="font-bold text-gray-900 text-lg mb-2">
                          {item.title}
                        </h2>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 mb-1 last:mb-0">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Section */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                  Our Location
                </h3>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 h-48 rounded-2xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-xl opacity-50"></div>
                        <MapPin className="w-16 h-16 text-white relative z-10 mx-auto" />
                      </div>
                      <p className="text-white font-medium mb-1">
                        Interactive Map
                      </p>
                      <p className="text-gray-300 text-sm">
                        (Map integration would go here)
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm">Nashik, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full mr-3"></div>
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              {/* Form Status Message */}
              {formStatus.submitted && (
                <div
                  className={`mb-8 p-5 rounded-xl border ${
                    formStatus.success
                      ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800"
                      : "bg-gradient-to-r from-red-50 to-rose-50 border-red-200 text-red-800"
                  } transform transition-all duration-300 animate-in slide-in-from-top`}
                >
                  <div className="flex items-center">
                    {formStatus.success ? (
                      <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                    )}
                    <p className="font-medium">{formStatus.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-200 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 rounded-xl border border-transparent peer-focus:border-orange-400 pointer-events-none"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-200 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-200 placeholder-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-200 placeholder-gray-400 resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${
                      isSubmitting
                        ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                    } text-white focus:outline-none focus:ring-4 focus:ring-orange-500/30`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-center text-gray-500 text-sm mt-3">
                    We typically respond within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
