import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, ShoppingCart } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuantity?: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, initialQuantity = 1 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentPreference: 'Cash on Delivery (COD)'
  });

  useEffect(() => {
    if (isOpen) setQuantity(initialQuantity);
  }, [isOpen, initialQuantity]);

  if (!isOpen) return null;

  const getPrice = (qty: number) => {
    if (qty === 1) return 600;
    if (qty === 2) return 1080;
    if (qty === 3) return 1440;
    return qty * 480;
  };

  const totalPrice = getPrice(quantity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!/^\d{6}$/.test(formData.pincode)) {
      alert("Please enter a valid 6-digit pincode.");
      return;
    }

    const message = `🛍️ *NEW ORDER: VÖKKA THAI AQUA 100ML*
----------------------------------
👤 *Customer Name:* ${formData.name}
📞 *Phone Number:* ${formData.phone}
📦 *Quantity:* ${quantity} Bottle(s)
💰 *Total Amount:* ₹${totalPrice}
💳 *Payment Mode:* ${formData.paymentPreference}

📍 *Delivery Address:*
${formData.address}
${formData.city}, ${formData.state} - ${formData.pincode}
----------------------------------
Please confirm my order.`;

    window.open(`https://wa.me/917780938743?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-[#050B14]/85 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-[#0A1320]/90 border border-white/[0.1] backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden max-h-[90vh] flex flex-col z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <ShoppingCart size={18} className="text-[#D4AF37]" />
            <h2 className="font-serif text-lg font-bold tracking-widest text-[#F5E6C8]">ORDER DETAILS</h2>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        {/* Scrollable Form */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Order Summary */}
          <div className="p-5 bg-white/[0.02] border border-white/[0.06] rounded-lg space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-sm font-bold text-white tracking-wider">VÖKKA Thai Aqua EDP (100ml)</h3>
                <p className="text-[10px] text-white/40 tracking-widest uppercase mt-1">Premium Unisex Formulation</p>
              </div>
              <span className="text-[#D4AF37] text-lg font-serif font-bold">₹{totalPrice}</span>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
              <span className="text-xs text-white/60 tracking-wider">Select Bottles:</span>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setQuantity(qty)}
                    className={`w-10 h-10 rounded-sm font-serif text-xs font-bold transition-all ${
                      quantity === qty
                        ? 'bg-[#D4AF37] text-[#050B14] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Form */}
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'Full Name', name: 'name', placeholder: 'Enter your name', type: 'text' },
              { label: 'Mobile Number', name: 'phone', placeholder: '10-digit mobile number', type: 'tel', maxLength: 10 },
              { label: 'Delivery Address', name: 'address', placeholder: 'House/Flat No, Street Name, Landmark', type: 'text' },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-[10px] tracking-widest text-white/50 uppercase block mb-1.5 font-bold">{field.label} *</label>
                <input 
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  maxLength={field.maxLength}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
            ))}
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'City', name: 'city', placeholder: 'City' },
                { label: 'State', name: 'state', placeholder: 'State' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-[10px] tracking-widest text-white/50 uppercase block mb-1.5 font-bold">{field.label} *</label>
                  <input 
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/[0.1] rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] tracking-widest text-white/50 uppercase block mb-1.5 font-bold">Pincode *</label>
                <input 
                  type="text"
                  name="pincode"
                  placeholder="6-digit pincode"
                  required
                  maxLength={6}
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
              
              <div>
                <label className="text-[10px] tracking-widest text-white/50 uppercase block mb-1.5 font-bold">Payment Method *</label>
                <select 
                  name="paymentPreference"
                  value={formData.paymentPreference}
                  onChange={handleChange}
                  className="w-full bg-[#050B14] border border-white/[0.1] rounded-sm px-3 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                >
                  <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                  <option value="UPI / Online on Delivery">UPI / Online on Delivery</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-white/[0.08] bg-white/[0.02] space-y-3">
          <button 
            type="submit" 
            form="checkout-form"
            className="w-full bg-[#D4AF37] text-[#050B14] hover:bg-white hover:text-[#050B14] transition-all duration-300 py-4 px-8 tracking-[0.15em] text-xs font-extrabold rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.15)] flex items-center justify-center gap-2"
          >
            CONFIRM ORDER VIA WHATSAPP
          </button>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-white/40 tracking-wider">
            <ShieldCheck size={11} className="text-[#D4AF37]" />
            <span>SECURE DIRECT ORDER • FAST DESPATCH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
