import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCursorEffect]',
  standalone: true,
})
export class CursorEffectDirective implements OnInit, OnDestroy {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number = 0;
  private resizeListener = this.resizeCanvas.bind(this);

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createCanvas();
    this.animate();
    window.addEventListener('resize', this.resizeListener);
  }

  private createCanvas(): void {
    this.canvas = this.renderer.createElement('canvas');
    this.renderer.setStyle(this.canvas, 'position', 'fixed');
    this.renderer.setStyle(this.canvas, 'top', '0');
    this.renderer.setStyle(this.canvas, 'left', '0');
    this.renderer.setStyle(this.canvas, 'z-index', '9999');
    this.renderer.setStyle(this.canvas, 'pointer-events', 'none');

    this.renderer.appendChild(document.body, this.canvas);

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas context not available');
    this.ctx = ctx;

    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const { clientX, clientY } = event;
    this.particles.push({
      x: clientX,
      y: clientY,
      alpha: 1,
      size: Math.random() * 6 + 4, // More consistent sizes
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 1) * 2,
    });
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles = this.particles.filter((p) => p.alpha > 0.05);
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = '#38B2AC';
      this.ctx.fillRect(p.x, p.y, p.size, p.size);
      this.ctx.restore();
    }
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', this.resizeListener);
    if (this.canvas && document.body.contains(this.canvas)) {
      this.renderer.removeChild(document.body, this.canvas);
    }
  }
}

interface Particle {
  x: number;
  y: number;
  alpha: number;
  size: number;
  vx: number;
  vy: number;
}
