import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    address: '',
    houseNo: '',
    roadArea: '',
    pincode: '',
    city: '',
    state: '',
    nearBy: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*NEW ORDER - VÖKKA THAI AQUA*
    
*Delivery Details:*
Name: ${formData.name}
Contact: ${formData.contactNumber}
Address: ${formData.address}
House No/Building: ${formData.houseNo}
Road/Area: ${formData.roadArea}
Nearby Landmark: ${formData.nearBy}
City: ${formData.city}
State: ${formData.state}
Pincode: ${formData.pincode}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // Redirect to WhatsApp (9419600518)
    window.open(`https://wa.me/919419600518?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-[#01060B]/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-[#020C17] border border-white/10 shadow-2xl rounded-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5">
          <h2 className="font-serif text-xl tracking-widest text-white">ADD DELIVERY ADDRESS</h2>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        
        {/* Form Container (Scrollable) */}
        <div className="overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <p className="text-xs tracking-widest text-[#1FDEC3] mb-6 uppercase">Contact Details</p>
          
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1FDEC3] transition-colors"
              />
            </div>
            <div>
              <input 
                type="tel" 
                name="contactNumber" 
                placeholder="Contact Number" 
                required
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1FDEC3] transition-colors"
              />
            </div>
            
            <p className="text-xs tracking-widest text-[#1FDEC3] mt-8 mb-4 uppercase">Address Details</p>
            
            <div>
              <input 
                type="text" 
                name="pincode" 
                placeholder="Pincode" 
                required
                value={formData.pincode}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1FDEC3] transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                name="city" 
                placeholder="City" 
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1FDEC3] transition-colors"
              />
              <input 
                type="text" 
                name="state" 
                placeholder="State" 
                required
                value={formData.state}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1FDEC3] transition-colors"
              />
            </div>
            
            <div>
              <input 
                type="text" 
                name="houseNo" 
                placeholder="House no. / Building name" 
                required
                value={formData.houseNo}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1FDEC3] transition-colors"
              />
            </div>
            
            <div>
              <input 
                type="text" 
                name="roadArea" 
                placeholder="Road name / Area / Colony" 
                required
                value={formData.roadArea}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1FDEC3] transition-colors"
              />
            </div>
            
            <div>
              <input 
                type="text" 
                name="nearBy" 
                placeholder="Near by (Landmark)" 
                value={formData.nearBy}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1FDEC3] transition-colors"
              />
            </div>
            
            {/* Hidden field for full address compatibility if needed */}
            <input type="hidden" name="address" value={`${formData.houseNo}, ${formData.roadArea}`} />
          </form>
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-[#01060B]">
          <button 
            type="submit" 
            form="checkout-form"
            className="w-full bg-white text-[#020C17] hover:bg-[#1FDEC3] transition-colors py-4 px-8 tracking-widest text-sm font-medium rounded-sm"
          >
            PLACE ORDER VIA WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
