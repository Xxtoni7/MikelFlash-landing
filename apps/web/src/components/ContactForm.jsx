import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PropTypes from 'prop-types';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

function ContactForm({ selectedService }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        servicio: selectedService,
      }));
    }
  }, [selectedService]);

  const servicios = [
    'Pintura Interior/Exterior',
    'Trabajos en Altura',
    'Impermeabilización',
    'Refacciones de Pisos',
    'Remodelaciones',
    'Mantenimiento General'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }

    if (!formData.servicio) {
      newErrors.servicio = 'Seleccione un servicio';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Por favor complete todos los campos correctamente');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Mensaje enviado correctamente. Nos contactaremos pronto.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={(e) => handleChange('nombre', e.target.value)}
          className="bg-card/50 backdrop-blur-sm border-border text-foreground placeholder:text-foreground/50"
        />
        {errors.nombre && (
          <p className="text-sm text-destructive mt-1">{errors.nombre}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="bg-card/50 backdrop-blur-sm border-border text-foreground placeholder:text-foreground/50"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={(e) => handleChange('telefono', e.target.value)}
          className="bg-card/50 backdrop-blur-sm border-border text-foreground placeholder:text-foreground/50"
        />
        {errors.telefono && (
          <p className="text-sm text-destructive mt-1">{errors.telefono}</p>
        )}
      </div>

      <div>
        <Select value={formData.servicio} onValueChange={(value) => handleChange('servicio', value)}>
          <SelectTrigger className="bg-card/50 backdrop-blur-sm border-border text-foreground">
            <SelectValue placeholder="Seleccione un servicio" />
          </SelectTrigger>
          <SelectContent>
            {servicios.map((servicio) => (
              <SelectItem key={servicio} value={servicio}>
                {servicio}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.servicio && (
          <p className="text-sm text-destructive mt-1">{errors.servicio}</p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={(e) => handleChange('mensaje', e.target.value)}
          rows={5}
          className="bg-card/50 backdrop-blur-sm border-border text-foreground placeholder:text-foreground/50 resize-none"
        />
        {errors.mensaje && (
          <p className="text-sm text-destructive mt-1">{errors.mensaje}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-background hover:bg-primary/90 font-semibold py-6 text-lg transition-all duration-300 active:scale-[0.98]"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            <Send size={20} className="mr-2" />
            Enviar Mensaje
          </>
        )}
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  selectedService: PropTypes.string,
};

export default ContactForm;
