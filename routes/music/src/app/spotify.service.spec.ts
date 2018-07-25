import {inject, fakeAsync, tick, TestBed} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';

import { SpotifyService } from './spotify.service';
import {describe} from "selenium-webdriver/testing";

describe('SpotifyService', () => {

  beforeEach(() => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          BaseRequestOptions,
          MockBackend,
          SpotifyService,
          { provide: Http,
            useFactory: (backend: ConnectionBackend,
                         defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }, deps: [MockBackend, BaseRequestOptions] },
        ]
      });
    });

    function expectURL(backend: MockBackend, url: string) {
      backend.connections.subscribe(c => {
        expect(c.request.url).toBe(url);
        const response = new ResponseOptions({body: '{"name": "aron"}'});
        c.mockRespond(new Response(response));
      });
    }

    describe('getTrack', () => {
      it('retrieves using the track ID',
        inject([SpotifyService, MockBackend], fakeAsync((spotifyService, mockBackend) => {
          let res;
          mockBackend.connections.subscribe(c => {
            expect(c.request.url).toBe('https://api.spotify.com/v1/tracks/TRACK_ID');
            let response = new ResponseOptions({body: '{"name": "aron"}'});
            c.mockRespond(new Response(response));
          });
          spotifyService.getTrack('TRACK_ID').subscribe((_res) => {
          res = _res;
          });
          tick();
          expect(res.name).toBe('felipe');
        }))
      );
    });

    describe('getArtist', () => {
      it('retrieves using the artist ID',
        inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
          let res;
          expectURL(backend, 'https://api.spotify.com/v1/artists/ARTIST_ID');
          svc.getArtist('ARTIST_ID').subscribe((_res) => {
            res = _res;
          });
          tick();
          expect(res.name).toBe('felipe');
        }))
      );
    });

    describe('getAlbum', () => {
      it('retrieves using the album ID',
        inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
          let res;
          expectURL(backend, 'https://api.spotify.com/v1/albums/ALBUM_ID');
          svc.getAlbum('ALBUM_ID').subscribe((_res) => {
            res = _res;
          });
          tick();
          expect(res.name).toBe('felipe');
        }))
      );
    });

    describe('searchTrack', () => {
      it('searches type and term',
        inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
          let res;
          expectURL(backend, 'https://api.spotify.com/v1/search?q=TERM&type=track');
          svc.searchTrack('TERM').subscribe((_res) => {
            res = _res;
          });
          tick();
          expect(res.name).toBe('felipe');
        }))
      );
    });


})
